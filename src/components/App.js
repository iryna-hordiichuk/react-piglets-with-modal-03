import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from 'components/Layout.js';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';
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


export class App extends Component {
  static defaultProps = {
    initialStickers: [],
  };

  state = {
    stickers: this.props.initialStickers,
    selectedImage: null,
  };

  // етот метод будет візіваться при сабмите формі
  addSticker = (img, label) => {
    this.setState(prevState => ({
      stickers: [...prevState.stickers, { id: nanoid(), img, label }],
    }));
  };

  deleteSticker = stickerId => {
    this.setState(prevState => ({
      stickers: prevState.stickers.filter(sticker => sticker.id !== stickerId),
    }));
  };

  selectImage = imageURL => {
    this.setState({selectedImage: imageURL});
  };

  closeModal = () => {
    this.setState({selectedImage: null});
  };

  render() {
    const { stickers, selectedImage } = this.state;
    return (
      <Layout>
        {/*передаем в целій кастомній компонент - onSubmit єто имя пропса */}
        <StickerForm onSubmit={this.addSticker} />
        {stickers.length > 0 && <StickerList items={stickers} onDelete={this.deleteSticker} onSelect={this.selectImage}/>}

        <Modal
        // компонент под капотом покрітій Проп тайпс, кидаетnошибку в консоли что ожидает буль,
        // поєтому приводим selectedImage к булю, потому что передали стринг (ссилку на картинку ЮРЛ)
        // еще вариант явно привести к булю: Boolean(selectedImage).
        isOpen={selectedImage !== null}
        onRequestClose={this.closeModal}
        style={modalStyles}
      >
        <button onClick={this.closeModal}>Close</button>
        <div>Image modal</div>
        <img src={selectedImage} alt="a piglet"/>
      </Modal>
      </Layout>
    );
  }
}
