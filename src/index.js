import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/example-1/App';
// import { App } from 'components/example-2/App';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import stickers from './stickers.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* App has its own prop - initialStickers */}
    <App initialStickers={stickers}/>
    <GlobalStyle />
  </React.StrictMode>
);