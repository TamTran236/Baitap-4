import { createStore } from 'redux';
import productReducer from './actions/productReducer';

const store = createStore(productReducer);

export default store;