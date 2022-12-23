import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/walletX">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
