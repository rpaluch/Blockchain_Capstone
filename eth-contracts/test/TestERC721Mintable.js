var CustomERC721Token = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await CustomERC721Token.new("Test", "T", {from: account_one});
            await this.contract.mint(account_two, 1,  {from: account_one});
        });

        it('should return total supply', async function () {
            const supply = await this.contract.totalSupply({from: account_one});
            assert.equal(supply, 1, "Should return correct number of minted tokens");
        });

        it('should get token balance', async function () {
            const balance = await this.contract.balanceOf(account_two, {from: account_one});
            assert.equal(balance, 1, "Should return correct balance for the account");
        });

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            var expected = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
            var uri = await this.contract.tokenURI(1);
            assert.equal(uri, expected, "Invalid URI was returned");
        });

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(account_two, account_one, 1, {from: account_two});
            var to = await this.contract.ownerOf(1, {from: account_one});
            assert.equal(to, account_one, "Should transfer token to target account");
        });
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await CustomERC721Token.new("Test", "T", {from: account_one});
            await this.contract.mint(account_one, 1, {from: account_one});
        });

        it('should fail when minting when address is not contract owner', async function () { 
            let minted = false;
            try {
                await this.contract.mint(account_two, 1, {from: account_two});
                minted = true;
            } catch(e) {
                console.log("Caught exception: " + e.message);
            }
            assert.equal(minted, false, "Token should not be minted");
        });

        it('should return contract owner', async function () {
            const owner = await this.contract.owner.call();
            assert.equal(owner, account_one, "Did not return correct owner");
        });

    });
});