import { Component } from 'react';
import { CardWrapper, Image, Label, Actions } from './Sticker.styled.js';
import { EditStickerModal } from 'components/EditStickerModal/EditStickerModal.js';
import { ImageModal } from 'components/ImageModal/ImageModal.js';
import { DeleteStickerModal } from 'components/DeleteStickerModal/DeleteStickerModal.js';
import { FavStickerModal } from 'components/FavStickerModal/FavStickerModal.js';

export class Sticker extends Component {
  state = {
    openedModal: null,
  };

  openModal = type => {
    this.setState({ openedModal: type });
    // указіваем какой тип модалки нужно откріть
  };

  closeModal = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const {
      sticker: { img, label },
    } = this.props;
//стікери додаємо через пропси, деструктуризуючи обєкт пропсів

    const { openedModal } = this.state;

    return (
      <>
        <CardWrapper>
          <Image
            src={img}
            alt={label}
            onClick={() => this.openModal('image')}
          />
          {/* click on image to open/close modal which shows larger picture */}
          <Label>{label}</Label>
          <Actions>
            <button onClick={() => this.openModal('edit')}>Edit</button>
            <button onClick={() => this.openModal('fav')}>Fav</button>
            <button onClick={() => this.openModal('delete')}>Delete</button>
          </Actions>
        </CardWrapper>

        <ImageModal
          isOpen={openedModal === 'image'}
          img={img}
          onClose={this.closeModal}
        />

        <EditStickerModal
          isOpen={openedModal === 'edit'}
          onClose={this.closeModal}
        />

        <FavStickerModal
          isOpen={openedModal === 'fav'}
          onClose={this.closeModal}
        />

        <DeleteStickerModal
          isOpen={openedModal === 'delete'}
          onClose={this.closeModal}
        />
      </>
    );
  }
}

//! создали много одинаковіх методов для управления модальнім окном поотдельности,
// єто повторяющийся код, будем использовать ПЕРЕЧИСЛЕНИЕ и в стейте
// вместо отдельного свойства для каждого вида-типа модалки,
// будем хранить одно свойство - куда ПРИ ОТКРИТИИ модалки будем записивать в стейт строку (строку с названием)
// взависимости какая модалка задействована юзером.
// А если ничего нету - буду записивать туда null.

// toggleEditImageModal = () => {
//   this.setState(prevState => ({
//     isEditModalOpen: !prevState.isEditModalOpen,
//   }));
// };
// toggleFavImageModal = () => {
//   this.setState(prevState => ({ isFavModalOpen: !prevState.isFavModalOpen }));
// };
// toggleDeleteImageModal = () => {
//   this.setState(prevState => ({
//     isDeleteModalOpen: !prevState.isDeleteModalOpen,
//   }));
// };

// toggleImageModal = () => {
//   this.setState(prevState => ({
//     isImageModalOpen: !prevState.isImageModalOpen,
//   }));
// };
