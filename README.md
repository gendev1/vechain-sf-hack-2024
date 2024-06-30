
Copy code
# Athentor

## 🚀 Problem Statement

Build a decentralized application (dApp) that tokenizes and gamifies Charles Oliveira’s young fighters training program. The dApp should have the following goals:

1. **Learn-2-Earn:** Fighters should be incentivized with B3TR tokens for taking their education seriously.
2. **Mentor-2-Earn:** Mentors and supporters should be incentivized with B3TR tokens for supporting fighters, earning a percentage of the fighters’ winnings in return.

## 🌟 Project Overview

**Athentor** is a platform designed to incentivize young athletes to adhere to their training regimes and provide them access to world-class professional mentors. Athletes are rewarded with tokens when they stick to their training regimen, and mentors are compensated for one-on-one calls with athletes.

### Key Features

- 🏅 **Incentivization for Athletes:** Athletes earn tokens for sticking to their training regime.
- 👩‍🏫 **Professional Mentorship:** Mentors are paid for one-on-one calls with athletes.
- 💸 **Gas-Free Transactions:** Smart contract calls are delegated to the backend to avoid gas fees for users.
- 🤖 **AI Chatbot:** Athletes have access to a ChatGPT-powered AI chatbot for assistance with nutrition and training.

### 🛠 Tech Stack

- **Turbo Repo:** For managing the monorepo.
- **VeChain:** Blockchain platform for tokenization.
- **Express:** Backend framework.
- **TypeScript:** Programming language for type safety.
- **shadcn:** Component library for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## 🔮 Future Enhancements

- 🔄 **Pull Method for Token Transfers:** Implement a pull method instead of the current push method for token transfers.
- 🔍 **Security Audits:** Conduct thorough security audits to ensure the safety and reliability of the platform.
- 💰 **Tokenize Future Earnings:** Develop a mechanism to tokenize the future earnings of athletes after the completion of their training.

## 🚧 Problems Faced

### 🐞 Inspector Issues
- **Problem:** The inspector does not work when the tokens are deployed to the testnet.
- **Workaround:** A script has been written to initialize the dApp cycle to circumvent this issue.

### 🔌 Proxy Issues for Remix
- **Problem:** The proxy for Remix has been an issue, preventing us from connecting properly.
- **Workaround:** We are currently seeking alternative solutions to establish a stable connection.

### ⚙️ Thor Dev Kit
- **Problem:** The Thor Dev Kit did not function properly in the backend.
- **Workaround:** We utilized `ThorClient` to call the functions, ensuring that our backend operations could continue seamlessly.

## Requirements

Ensure your development environment is set up with the following:

- **Node.js (v18 or later):** [Download here](https://nodejs.org/en/download/package-manager) 📥
- **Yarn:** [Install here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) 🧶
- **Docker (for containerization):** [Get Docker](https://docs.docker.com/get-docker/) 🐳
- **Hardhat (for smart contracts):** [Getting Started with Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) ⛑️

## Project Structure
### Frontend (apps/frontend) 🌐

A blazing-fast React application powered by Vite:
- **Vechain dapp-kit:** Streamline wallet connections and interactions. [Learn more](https://docs.vechain.org/developer-resources/sdks-and-providers/dapp-kit)

### Backend (apps/backend) 🔙

An Express server crafted with TypeScript for robust API development:
- **Vechain SDK:** Seamlessly fetch and perform transactions with the VechainThor blockchain. [Learn more](https://docs.vechain.org/developer-resources/sdks-and-providers/sdk)
- **OpenAI GPT-Vision-Preview:** Integrate image analysis capabilities. [Explore here](https://platform.openai.com/docs/guides/vision)

### Contracts (apps/contracts) 📜

Smart contracts in Solidity, managed with Hardhat for deployment on the Vechain Thor network.

### Packages 📦

Shared configurations and utility functions to unify and simplify your development process.

## Environment Variables ⚙️

Configure your environment variables for seamless integration:

### Frontend

Place your `.env` files in `apps/frontend`:
- **VITE_RECAPTCHA_V3_SITE_KEY:** [Request your RecaptchaV3 site keys](https://developers.google.com/recaptcha/docs/v3)

### Backend

Store your environment-specific `.env` files in `apps/backend`. `.env.development.local` & `.env.production.local` allow for custom environment variables based on the environment:
- **OPENAI_API_KEY:** [Get your GPT-4 OpenAI key](https://platform.openai.com/api-keys) (Enable GPT-4 [here](https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4-gpt-4-turbo-and-gpt-4o))
- **RECAPTCHA_SECRET_KEY:** [Request your RecaptchaV3 site keys](https://developers.google.com/recaptcha/docs/v3)

### Contracts

Manage deployment parameters and network configurations in `hardhat.config.js` under `apps/contracts`:
- **MNEMONIC:** Mnemonic of the deploying wallet

## Getting Started 🏁

Clone the repository and install dependencies with ease:
```bash
yarn install # Run this at the root level of the project
```

## Deploying Contracts 🚀

Deploy your contracts effortlessly on either the Testnet or Solo networks:

### Deploying on Solo Network

```bash
yarn contracts:deploy:solo
```

### Deploying on Testnet

```bash
yarn contracts:deploy:testnet
```

## Running on Solo Network 🔧

Run the Frontend and Backend, connected to the Solo network and pointing to your deployed contracts. Ensure all environment variables are properly configured:
```bash
yarn dev 
```

### Setting up rewards
Run vechain devpal 
```bash
npx @vechain/devpal http://localhost:8669
```

Open the `Inspector` tab and perform the following transactions:
- **Add Contracts:** Add the EcoEarn contract and the Token contract deployed previously. Addresses can be found in the `config-contracts` package. ABIs can be found in the artifacts folder of the `contracts` app.
![image](https://github.com/vechain/x-app-template/assets/64158778/e288ada4-5973-4428-9e72-a362388b1826)
- **Approve token:** Approve the EcoEarn contract to spend your tokens
![image](https://github.com/vechain/x-app-template/assets/64158778/70787d8d-ae60-40ea-b277-87359aaca4ee)
- **Claim rewards:** Claim rewards for the EcoEarn contract
![image](https://github.com/vechain/x-app-template/assets/64158778/834437e5-8de1-4802-9ed7-dca6fe4df332)
- **Trigger cycle:** Trigger the cycle for the EcoEarn contract
![image](https://github.com/vechain/x-app-template/assets/64158778/00236dcd-5b64-4493-9acd-55c6a7f0981f)

