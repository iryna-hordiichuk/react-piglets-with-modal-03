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

// модальне вікно картинка - відкривається по кліку на картинку
// показує збільшену версію картинки
export const ImageModal = ({ isOpen, img, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      // click on backdrop to close modal
      onRequestClose={onClose}
      style={modalStyles}
    >
      <button onClick={onClose}>Close</button>
      <div>Image modal</div>
      <img src={img} alt="a piglet" />
    </Modal>
  );
};
