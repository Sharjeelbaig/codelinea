import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css'
import { Provider } from 'react-redux';
import { configureStore } from './redux/Store';

ReactDOM.render(
  <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
