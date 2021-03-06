// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
const SquareVerifier = artifacts.require('SquareVerifier');
// - use the contents from proof-1.json generated from zokrates steps
const proof = require("./test-proof");

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];

    describe('verify proof', function () {
        before(async function() {
            this.a = proof.proof.a;
            this.b = proof.proof.b;
            this.c = proof.proof.c;
            this.input = proof.inputs;
        });

        beforeEach(async function () {
            this.contract = await SquareVerifier.new({from: account_one});
        });

        // Test verification with correct proof
        it('should positively verify correct proof', async function() {
            const result = await this.contract.verifyTx.call(this.a, this.b, this.c, this.input, {from: account_one});
            assert.equal(result, true, 'Verification failed') ;
        });

        // Test verification with incorrect proof
        it('should reject incorrect proof', async function() {
            const result = await this.contract.verifyTx.call(this.a, this.b, this.c, ["", ""], {from: account_one});
            assert.equal(result, false, 'Verification should not be successful') ;
        });

    });
});


    

