import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProductForm from './components/ProductForm';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ProductForm />
    </div>
  </Provider>,
  document.getElementById('root')
);