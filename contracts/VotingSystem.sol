//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

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
    mapping(uint=>Candidate) public candidateList;
    mapping(uint=>Voter) public voterList;
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