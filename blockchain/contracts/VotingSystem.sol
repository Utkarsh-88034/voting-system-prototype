//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract VotingSystem {
    struct Voter{
        uint id;
        string name;
        bool cast;
    }
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    uint public voterCount;
    uint public candidateCount;
    mapping(uint=>Candidate) public candidateList;
    mapping(uint=>Voter) public voterList;

    constructor() public{
        createCandidate(1, "admin-candidate");
        createVoter(1, "admin-voter");
        voterCount = 1;
        candidateCount = 1;
    }
    function vote(uint candidateId, uint voterId) public {
        if(voterList[voterId].cast !=true){
            candidateList[candidateId].voteCount++;
            voterList[voterId].cast = true;
        }
    }
    function createCandidate(uint id, string memory name) public{
        candidateList[id] = Candidate(id,name,0);
    }
    function createVoter(uint id, string memory name) public{
        voterList[id] = Voter(id,name,false);
    }
}