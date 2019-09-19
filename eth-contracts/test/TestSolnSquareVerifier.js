const SquareVerifier = artifacts.require('SquareVerifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proof = require("./test-proof");

contract('SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('can mint tokens', function () {
        before(async function () {
            const verifierContract = await SquareVerifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifierContract.address, "Test", "T", {from: account_one});
            this.a = proof.proof.a;
            this.b = proof.proof.b;
            this.c = proof.proof.c;
            this.input = proof.inputs;
        });

        // Test if a new solution can be added for contract and therefore token can be minted
        it('should mint token with a correct solution', async function () {
            try {
                await this.contract.mintToken(
                    1,
                    account_one,
                    1000,
                    this.a,
                    this.b,
                    this.c,
                    this.input,
                    {from: account_one}
                );
            } catch (e) {
                console.log("Error: " + e.message);
            }
            var expectedUri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1000";
            var uri = await this.contract.tokenURI(1000);

            assert.equal(uri, expectedUri, "Should mint token");
        });

        // Test negative scenarios when token cannot be minted
        it('should not mint token with an invalid solution', async function () {
            let minted = true;
            try {
                await this.contract.mintToken(
                    2,
                    account_one,
                    1001,
                    this.a,
                    this.b,
                    this.c,
                    ["", ""],
                    {from: account_one}
                );
            } catch (e) {
                console.log("Error: " + e.message);
                minted = false;
            }
            assert.equal(minted, false, "Should not mint token");
        });

        it('should not mint token with already used solution', async function () {
            let minted = true;
            try {
                await this.contract.mintToken(
                    3,
                    account_one,
                    1002,
                    this.a,
                    this.b,
                    this.c,
                    this.input,
                    {from: account_one}
                );
            } catch (e) {
                console.log("Error: " + e.message);
                minted = false;
            }
            assert.equal(minted, false, "Should not mint token");
        });
    });
});