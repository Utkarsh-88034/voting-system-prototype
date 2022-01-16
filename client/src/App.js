import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import contract from './contracts/VotingSystem.json';

function App() {
  const CONTRACT_ADDRESS = '0x643Ff377e26d2CF01bE7617EE42dd70fCE6c1Ab0';
  const [account, setAccount] = useState();
  const [votingSmartContract, setVotingSmartContract] = useState();
  useEffect(() => {
    const load = async () => {
      const web3 = new Web3(Web3.givenProvider || 'https://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const smartContract = new web3.eth.Contract(
        contract.abi,
        CONTRACT_ADDRESS
      );

      setVotingSmartContract(smartContract);

      const voterCount = await smartContract.methods.voterCount().call();
    };
    load();
  }, []);
  return <div className="App">your account is : {account}</div>;
}

export default App;
