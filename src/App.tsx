import { useState, useCallback, useMemo } from 'react';
import { Modal } from './components/Modal';
import { ModalContext } from './configs/modalContext';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  // modal context optimizations
  const toggleModal = useCallback((value: boolean) => setShowModal(value), []);

  const contextValue = useMemo(() => ({
    showModal,
    toggleModal,
  }), [showModal, toggleModal]);

  const openModal = () => {
    toggleModal(true);
  }

  return (
    <ModalContext.Provider value={contextValue}>
      <h1>Frontend task</h1>
      <button onClick={openModal}>Open modal</button>
      {showModal && <Modal subProcess="03A456 Picking smtg_long name" />}
    </ModalContext.Provider>
  )
}