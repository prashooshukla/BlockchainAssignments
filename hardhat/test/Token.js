const { ethers } = require("hardhat")
const { expect } = require("chai");

describe("Token Contract", function () {
    it("Once Deployed, owner should have 1000 tokens", async function () {
        const [owner] = await ethers.getSigners(); //[0];
        const Token = await ethers.getContractFactory("Token");
        const hhtoken = await Token.deploy();
        console.log(hhtoken);

        const ownerBalance = await hhtoken.balanceOf(owner.address);
        console.log(owner.address);

        expect(await hhtoken.totalSupply()).to.equal(ownerBalance);
    });


    it("Should transfer tokens between accounts", async function() {
        
        const[owner, addr1, addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hhtoken = await Token.deploy();

        await hhtoken.transfer(addr1.address, 100);

        const bal1 = await hhtoken.balanceOf(owner.address);
        const bal2 = await hhtoken.balanceOf(addr1.address);

        expect(bal1).to.equal(900);
        expect(bal2).to.equal(100);

        await hhtoken.connect(addr1).transfer(addr2.address, 30);

        const bal3 = await hhtoken.balanceOf(addr1.address);
        const bal4 = await hhtoken.balanceOf(addr2.address); 

        expect(bal3).to.equal(70);
        expect(bal4).to.equal(30);

    });
});