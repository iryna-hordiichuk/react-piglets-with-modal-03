import { Button, Field, Form, Input } from './StickerForm.styled';

// деструктуризируем проп onSumit
export const StickerForm = ({ onSubmit }) => {
    // Єто целій кастомній компонент формі, поєтому 
    // onSubmit єто проп (ф-я переданная посредством пропа)
    const handleSubmit = event => {
      event.preventDefault();
      const { img, label } = event.target.elements;
      onSubmit(img.value, label.value);
    };
  
    return (
        //єто стилизированній елемент, под капотом єто обічний тег формі, поєтому здесь onSubmit
        // регистрация колбека для ивента сабмит (не проп)
      <Form onSubmit={handleSubmit}>
        <Field>
          Image url
          <Input name="img" />
        </Field>
        <Field>
          Label text
          <Input name="label" />
        </Field>
        <Button>Add sticker</Button>
      </Form>
    );
  };

