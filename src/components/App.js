import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from 'components/Layout.js';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';

export class App extends Component {
  static defaultProps = {
    initialStickers: [],
  };

  state = {
    stickers: this.props.initialStickers,
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

  render() {
    const { stickers } = this.state;
    return (
      <Layout>
        {/*передаем в целій кастомній компонент - onSubmit єто имя пропса */}
        <StickerForm onSubmit={this.addSticker} />
        {stickers.length > 0 && <StickerList items={stickers} onDelete={this.deleteSticker}/>}
      </Layout>
    );
  }
}
