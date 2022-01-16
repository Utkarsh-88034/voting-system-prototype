import React from 'react';

const useCreateFunctions = (contract) => {
  const createCandidate = contract?.methods.createCandidate;
  const createVoter = contract?.methods.createVoter;

  return { createCandidate, createVoter };
};

export { useCreateFunctions };
