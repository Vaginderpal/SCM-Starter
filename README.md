# React Crypto ATM
This is a simple React component for a Crypto ATM application. It allows users to connect their MetaMask wallet, view their account balance, deposit and withdraw ETH, check the owner's name and a simple calculator with limited operations.In this project we link our ATM with Metamask account. 

# Features
The Crypto ATM component provides the following features:

Connect to MetaMask wallet
Display user's account address
View user's account balance
Deposit ETH into the ATM
Withdraw ETH from the ATM
Check the owner's name
add two values
subtract two values
multiply two values
Please note that the component assumes you have set up and configured MetaMask in your browser.

# usage 
Make sure you have Solidity ^0.8.17 installed. Crypto ATMs provide a convenient and accessible way for users to buy and sell cryptocurrencies using cash or traditional payment methods. They enable individuals to easily convert between cryptocurrencies and fiat currencies, expanding the adoption and usability of digital assets in the real world.

# Customization
You can customize the UI elements, styles, and behavior of the Crypto ATM component according to your project's requirements. Modify the JSX structure, CSS styles, and event handlers to align with your application's design and functionality.

# Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/
