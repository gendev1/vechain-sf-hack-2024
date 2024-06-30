import { Button} from "@/components/ui/button";
import { useWallet, useWalletModal } from "@vechain/dapp-kit-react";
import { humanAddress } from "@repo/utils/FormattingUtils";

export const ConnectWalletButton = () => {
  const { account } = useWallet();
  const { open } = useWalletModal();

  if (!account)
    return (
        <Button
          onClick={open}
          data-testid="connect-wallet">
          Connect Wallet
        </Button>
      
    );

  return (
    
      <Button onClick={open}>
        <>
          {/* <AddressIcon address={account} boxSize={4} rounded={"full"} /> */}
          <p>{humanAddress(account, 4, 6)}</p>
          </>
      </Button>
   
  );
};
