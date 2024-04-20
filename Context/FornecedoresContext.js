import React, { createContext, useState, useContext } from 'react';

const FornecedoresContext = createContext();

export const useFornecedores = () => useContext(FornecedoresContext);

export const FornecedoresProvider = ({ children }) => {
  const [fornecedores, setFornecedores] = useState([]);

  const addFornecedor = fornecedor => {
    setFornecedores(currentFornecedores => [...currentFornecedores, fornecedor]);
  };

  return (
    <FornecedoresContext.Provider value={{ fornecedores, addFornecedor }}>
      {children}
    </FornecedoresContext.Provider>
  );
};