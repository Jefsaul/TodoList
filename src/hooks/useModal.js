import { useState, useCallback } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = useCallback((data = {}) => {
    setModalData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Opcionalmente, limpiar los datos al cerrar el modal
    setModalData({});
  }, []);

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
  };
};

export default useModal;
