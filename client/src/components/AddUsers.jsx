import React, { useRef } from 'react';

const AddUsers = ({ createCandidate, createVoter, account }) => {
  console.log(createCandidate);
  const candidateNameRef = useRef();
  const candidateIdRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (candidateNameRef.current.value && candidateIdRef.current.value) {
      createCandidate(
        candidateIdRef.current.value,
        candidateNameRef.current.value
      ).send({ from: account });
      console.log('something');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="number" ref={candidateIdRef} required />
      <input type="text" ref={candidateNameRef} required />
      <button type="submit">add Candidate</button>
    </form>
  );
};

export default AddUsers;
