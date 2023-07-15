const { ethers } = require("ethers");

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
// Replace with your contract address

// Contract ABI
const contractABI = [
  "event Deposit(address indexed owner, uint256 amount)",
  "event Withdraw(address indexed owner, uint256 amount)",
  "function deposit(address _account, uint256 _number) public payable",
  "function withdraw(address _account, uint256 _number) public payable",
  "function getBalance(address _address) public view returns(uint256)",
  "function getOwnerName() public viw returns(string)"
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Event listener for Deposit event
contract.on("Deposit", (owner, amount, event) => {
    console.log("Deposit event triggered:");
    console.log("Owner:", owner);
    console.log("Amount:", amount);
    console.log("Event:", event);
});

// Event listener for Withdraw event
contract.on("Withdraw", (owner, amount, event) => {
    console.log("Withdraw event triggered:");
    console.log("Owner:", owner);
    console.log("Amount:", amount);
    console.log("Event:", event);
});


// Get Owner name
async function getOwnerName() {
  try {
    const result = await contract.getOwnerName();
    console.log("Owner name:", result);
  } catch (error) {
    console.error("You are not Owner:", error);
  }
}

getOwnerName();
