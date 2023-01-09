import { CardWrapper, Image, Label } from './Sticker.styled.js';
import Modal from 'react-modal';
import { Component } from 'react';

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

export class Sticker extends Component {
  state = {
    isModalOpen: false,
  };

  // openModal = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // closeModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

  //! так как не возможно откріть модалку два раза подряд(нельзя дважді записать тру),
  // вместо двух методов можно сделать один -  тогл исп инверсию от предідущего состояния;

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const {
      sticker: { img, label },
    } = this.props;

    const { isModalOpen } = this.state;

    return (
      <>
        <CardWrapper>
          <Image src={img} alt={label} onClick={this.toggleModal} />
          <Label>{label}</Label>
          <button onClick={() => onDelete(id)}>Delete piglet</button>
        </CardWrapper>

        <Modal
          isOpen={isModalOpen}
          // click on backdrop
          onRequestClose={this.toggleModal}
          style={modalStyles}
        >
          <button onClick={this.toggleModal}>Close</button>
          <div>Image modal</div>
          <img src={img} alt="a piglet" />
        </Modal>
      </>
    );
  }
}
