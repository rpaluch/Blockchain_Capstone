pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./SquareVerifier.sol";

// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {

    // define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    SquareVerifier internal verifierContract;

    constructor(address verifierAddress, string memory name, string memory symbol) CustomERC721Token(name, symbol) public
    {
        verifierContract = SquareVerifier(verifierAddress);
    }

    // define a solutions struct that can hold an index & an address
    struct Solution {
        bool used;
        uint256 index;
        address solutionOwner;
    }

    // define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions;


    // Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address solutionOwner);


    // Create a function to add the solutions to the mapping and emit the event
    function _addSolution
    (
        uint256 _index,
        address _owner,
        bytes32 _key
    )
    internal
    {
        solutions[_key] = Solution({
            used: true,
            index: _index,
            solutionOwner: _owner
        });

        emit SolutionAdded(solutions[_key].index, solutions[_key].solutionOwner);
    }


    // Create a function to mint new NFT only after the solution has been verified
    function mintToken
    (
        uint256 index,
        address to,
        uint256 tokenId,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public {
        //  - make sure the solution is unique (has not been used before)
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));

        require(!solutions[key].used, "Solution has already been used before");

        require(verifierContract.verifyTx(a, b, c, input), "Proof is invalid");

        _addSolution(index, to, key);

        //  - make sure you handle metadata as well as tokenSuplly
        mint(to, tokenId);
    }

}

























