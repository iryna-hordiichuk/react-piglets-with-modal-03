import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';
import { Component } from 'react';

export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };

  selectSticker = idx => {
    this.setState({
      selectedIdx: idx,
    });
  };

  render() {
    const { stickers } = this.props;

    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              isSelected={this.state.selectedIdx === idx}
              onSelect={()=> this.selectSticker(idx)}
            // исп анонимка когда нужно аргумент какойто передать
            // если передать просто ссілку на ф-ю, то по клик 
            // у ф-ю зайдет ивент
            />
          </li>
        ))}
      </List>
    );
  }
}

// ! Eсли ф-ия возвращает значение - результатом пропса будет значение єтой ф-ии
// Есть два кейса:
//* Передаешь ссілку на ф-ю, если нужто передать єту ф-ю как колбек дальше в пропс
// в онклик или онсабмит например, чтобі візвать ее где-то там под капотом
//* передаеть візов ф-ии если ЗНАЧЕНИЕМ пропса должен біть РЕЗУЛЬТАТ РАБОТІ єтой ф-ии 
// (число, массив, обьект)
// значением пропса может другая ф-я как таковая или результат работі ф-ии (какое-то готовое значение)

// ! вічеслительніе данніе - данніе которіе віч. на основе пропсов и состояния 