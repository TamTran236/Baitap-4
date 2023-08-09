import { ADD_PRODUCT, TOGGLE_SELECT_ALL, TOGGLE_PRODUCT_SELECT, DELETE_SELECTED_PRODUCTS } from './types';
import { v4 as uuidv4 } from 'uuid';

export const addProduct = (productName) => ({
  type: ADD_PRODUCT,
  payload: {
    id: uuidv4(),
    name: productName,
    selected: false,
  },
});

export const toggleSelectAll = () => ({
  type: TOGGLE_SELECT_ALL,
});

export const toggleProductSelect = (productId) => ({
  type: TOGGLE_PRODUCT_SELECT,
  payload: productId,
});

export const deleteSelectedProducts = () => ({
  type: DELETE_SELECTED_PRODUCTS,
});
