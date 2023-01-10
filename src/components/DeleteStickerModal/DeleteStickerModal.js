import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const DeleteStickerModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      // click on backdrop to close modal
      onRequestClose={onClose}
      style={modalStyles}
    >
      <button onClick={onClose}>Close</button>
      <div>Delete modal</div>
    </Modal>
  );
};