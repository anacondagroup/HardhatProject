const { ethers } = require("hardhat");

async function main(){
    const[deployer] = await ethers.getSigners();
    console.log("deployer address", deployer.address);
    console.log("deployer balance", (await (await deployer.getBalance()).toString()));

    const Token = await ethers.getContractFactory("Token");
    const token = Token.deploy();

    console.log("Token Address", (await token).address);
}

main()
    .then(() => process.exit(0))
    .catch((erro) => {
        console.error(error);
        process.exit(1);
    });