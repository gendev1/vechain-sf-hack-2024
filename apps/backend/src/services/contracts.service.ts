import { ADMIN_ADDRESS, ADMIN_PRIVATE_KEY, REWARD_AMOUNT } from '@/config';
import { HttpException } from '@/exceptions/HttpException';
import { Submission } from '@/interfaces/submission.interface';
import { thor } from '@/utils/thor';
import { Service } from 'typedi';
import { EcoEarnABI } from '@/utils/const';
import { ethers } from 'ethers';
import { config } from '@repo/config-contract';
import abi from '../utils/const/abi.json';
import { TransactionHandler, clauseBuilder, coder } from '@vechain/sdk-core';
import { ProviderInternalBaseWallet, ThorClient, VeChainProvider, signerUtils } from '@vechain/sdk-network';
@Service()
export class ContractsService {
  public async registerSubmission(submission: Submission): Promise<void> {
    const testnetURL = 'https://testnet.vechain.org';
    const thorTestnetClient = ThorClient.fromUrl(testnetURL, { isPollingEnabled: false });

    const senderAccount: { privateKey: any; address: string } = {
      privateKey: ADMIN_PRIVATE_KEY, // Convert Uint8Array to string
      address: ADMIN_ADDRESS,
    };

    const provider = new VeChainProvider(
      // Thor client used by the provider
      thorTestnetClient,

      // Internal wallet used by the provider (needed to call the getSigner() method)
      new ProviderInternalBaseWallet([
        {
          privateKey: senderAccount.privateKey,
          address: senderAccount.address,
        },
      ]),

      // Disable fee delegation (BY DEFAULT IT IS DISABLED)
      false,
    );

    const transaction = {
      clauses: [
        clauseBuilder.functionInteraction(config.CONTRACT_ADDRESS, coder.createInterface(abi).getFunction('registerValidSubmission'), [
          submission.address,
          `0x${ethers.parseEther('1').toString(16)}`,
        ]),
      ],
    };

    const gasResult = await thorTestnetClient.gas.estimateGas(transaction.clauses, ADMIN_ADDRESS);

    if (gasResult.reverted === true) throw new HttpException(500, `EcoEarn: Internal server error: ${gasResult.revertReasons}`);

    const txBody = await thorTestnetClient.transactions.buildTransactionBody(transaction.clauses, gasResult.totalGas);
    const signer = await provider.getSigner(senderAccount.address);
    const rawSignedTransaction = await signer.signTransaction(signerUtils.transactionBodyToTransactionRequestInput(txBody, senderAccount.address));
    const signedTransaction = TransactionHandler.decode(Buffer.from(rawSignedTransaction.slice(2), 'hex'), true);

    const sendTransactionResult = await thorTestnetClient.transactions.sendTransaction(signedTransaction);
    // this is the reason for the error
    const txReceipt = await thorTestnetClient.transactions.waitForTransaction(sendTransactionResult.id);
    console.log('txReceipt:', txReceipt);
  }

  public async validateSubmission(submission: Submission): Promise<void> {
    console.log('Validating submission:', submission);
    const isMaxSubmissionsReached = await thor.contracts.executeCall(
      config.CONTRACT_ADDRESS,
      coder.createInterface(abi).getFunction('isUserMaxSubmissionsReached'),
      [submission.address],
    );
    console.log('isMaxSubmissionsReached:', isMaxSubmissionsReached);

    if (Boolean(isMaxSubmissionsReached[0]) === true) throw new HttpException(409, `EcoEarn: Max submissions reached for this cycle`);
  }
}
