import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
import stickers from '../../stickers.json';

/**
 * !Task 1:
 * Каждый стикер должен открываться и закрываться независимо от остальных
 * State will be colocated in every sticker, as ther states do not depend on each other
 * there is no need to lift state to a nearest common parent 
 */

export const App = () => {
  return (
    <Layout>
      <h1>Example 1</h1>
      <StickerList stickers={stickers} />
    </Layout>
  );
};
