import { Sticker } from '../Sticker/Sticker.js';
import { List } from './StickerList.styled';

//! here Stickerlist is transitional for a prop onDelete,
// it simply passes the prop further down to the Sticker component
export const StickerList = ({ items, onDelete}) => {
  return (
    <List>
      {items.map((item, idx) => (
        <li key={idx}>
          <Sticker sticker={item} onDelete={onDelete}/>
        </li>
      ))}
    </List>
  );
};