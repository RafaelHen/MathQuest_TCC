import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz do aplicativo

function ModalCadastro() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
      >
        <h2>Conteúdo do Modal</h2>
        <p>Isso é um exemplo de modal.</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default ModalCadastro;
