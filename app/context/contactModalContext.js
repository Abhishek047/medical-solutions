'use client';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    console.log('open');
    setOpen(true);
  };
  const closeModal = () => {
    console.log('close');
    setOpen(false);
  };
  return (
    <ModalContext.Provider value={{ isOpen: open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
