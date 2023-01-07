import { CardWrapper, Image, Label } from './Sticker.styled.js';

export const Sticker = ({ sticker: {id, img, label }, onDelete, onSelect }) => {
  return (
    <CardWrapper>
      <Image src={img} alt={label} onClick={()=>{onSelect(img)}} />
      <Label>{label}</Label>
      <button onClick={() => onDelete(id)}>Delete piglet</button>
    </CardWrapper>
  );
};