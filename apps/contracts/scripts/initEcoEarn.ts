// scripts/init.js
import { ethers } from 'hardhat';
import { config } from '@repo/config-contract';

async function initEcoEarn() {
    const [owner] = await ethers.getSigners();

    // Get the contract addresses from the config
    const ecoEarnAddress = config.CONTRACT_ADDRESS;
    const tokenAddress = config.TOKEN_ADDRESS;

    // Get the contract instances using getContractAt
    const ecoEarn = await ethers.getContractAt('EcoEarn', ecoEarnAddress);
    const token = await ethers.getContractAt('Token', tokenAddress);

    // Simulate receiving tokens from allocations round
    const allocationAmount = ethers.parseEther('6700');
    await token.connect(owner).mint(owner.address, allocationAmount);
    console.log(`Minted 6,700 tokens to owner at address: ${owner.address}`);

    // Approve EcoEarn contract to spend the tokens from the owner
    const maxApprovalAmount = ethers.MaxUint256;
    await token.connect(owner).approve(ecoEarnAddress, maxApprovalAmount);
    console.log(`Approved EcoEarn contract to spend tokens from owner`);

    // Claim allocation for the current cycle
    const ownerBalance = await token.balanceOf(owner.address);
    await ecoEarn.connect(owner).claimAllocation(ownerBalance);
    console.log(`Claimed allocation for the current cycle with amount: ${ethers.formatEther(ownerBalance)}`);

    // Verify the token balance of EcoEarn contract
    const ecoEarnTokenBalance = await token.balanceOf(ecoEarnAddress);
    console.log(`EcoEarn Token Balance: ${ethers.formatEther(ecoEarnTokenBalance)}`);

    // Trigger the first cycle
    await ecoEarn.connect(owner).triggerCycle();
    console.log(`Triggered the first cycle`);

    // Verify the current cycle
    const currentCycle = await ecoEarn.getCurrentCycle();
    console.log(`Current Cycle: ${currentCycle}`);

    

}

initEcoEarn()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
