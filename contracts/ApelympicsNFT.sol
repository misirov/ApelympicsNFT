/// @dev Deployed code:

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ApelympicsNFT is ERC721URIStorage {

    event ApeMinted(address _to, uint _uri);
    
    uint _tokenId = 4;
    address owner;
    string URI = "https://gateway.pinata.cloud/ipfs/QmdaJwugg4U1hdCkSWAavBhRMxV6NrFa7B8Eih4Aew2rWA/4.json";
    
    mapping(address => uint) top3;
    mapping(address => bool) minted;

    modifier canMint{
        require(minted[msg.sender] == false, "why mint again, ape?");
        _;
    }

    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    constructor(address[] memory _winners) ERC721("ApelympicsNFT", "APE"){
        owner = msg.sender;
        for(uint i = 0; i < _winners.length; i++){
            top3[_winners[i]] = i+1;
        }
    }

    /// @dev    We want to check if minter is one of the winners. If so, give them the price.
    /// @dev    Can only mint once per address.
    function mint() public canMint {

        if(top3[msg.sender] == 1){
            minted[msg.sender] = true;
            _safeMint(msg.sender, 1);
            _setTokenURI(1, "https://gateway.pinata.cloud/ipfs/QmeSCmPfHEnsYpzyHWyWGoXSkMgpWJQ32WBU9jKHVdTpz8/1.json");
            emit ApeMinted(msg.sender, 1);
            return;
        }
        if(top3[msg.sender] == 2){
            minted[msg.sender] = true;
            _safeMint(msg.sender, 2);
            _setTokenURI(2, "https://gateway.pinata.cloud/ipfs/QmeSCmPfHEnsYpzyHWyWGoXSkMgpWJQ32WBU9jKHVdTpz8/2.json");
            emit ApeMinted(msg.sender, 2);
            return;
        }
        if(top3[msg.sender] == 3){
            minted[msg.sender] = true;
            _safeMint(msg.sender, 3);
            _setTokenURI(3, "https://gateway.pinata.cloud/ipfs/QmeSCmPfHEnsYpzyHWyWGoXSkMgpWJQ32WBU9jKHVdTpz8/3.json");
            emit ApeMinted(msg.sender, 3);
            return;
        }

        minted[msg.sender] = true;
        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId,URI);
        emit ApeMinted(msg.sender, _tokenId);
        _tokenId++;
    }

    function addWinnerAddress(address _addr, uint _position) external onlyOwner {
        top3[_addr] = _position;
    }
}
