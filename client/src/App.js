import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import contract from './contracts/VotingSystem.json';
import { useCreateFunctions } from './hooks/use-create-functions';
import AddUsers from './components/AddUsers';

function App() {
  const CONTRACT_ADDRESS = '0x426218e52383AA3Cc9346397B1159ff628cb17b9';
  const [account, setAccount] = useState();
  const [votingSmartContract, setVotingSmartContract] = useState();
  const [voterCount, setVoterCount] = useState(0);
  const [candidateCount, setCandidateCount] = useState(0);
  // const [createCandidate, setCreateCandidate] = useState();

  useEffect(() => {
    const load = async () => {
      const web3 = new Web3(Web3.givenProvider || 'https://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const smartContract = new web3.eth.Contract(
        contract.abi,
        CONTRACT_ADDRESS
      );
      setVotingSmartContract(smartContract);
      setVoterCount(await smartContract.methods.voterCount().call());
      setCandidateCount();
    };
    load();
  }, []);
  const { createCandidate, createVoter } =
    useCreateFunctions(votingSmartContract);
  return (
    <div className="App">
      your account is : {account}
      <AddUsers createCandidate={createCandidate} account={account} />
    </div>
  );
}

export default App;
