import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/walletX">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
