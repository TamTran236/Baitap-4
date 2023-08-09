import { ADD_PRODUCT, TOGGLE_SELECT_ALL, TOGGLE_PRODUCT_SELECT, DELETE_SELECTED_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  selectAll: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case TOGGLE_SELECT_ALL:
      return {
        ...state,
        selectAll: !state.selectAll,
        products: state.products.map((product) => ({
          ...product,
          selected: !state.selectAll,
        })),
      };
    case TOGGLE_PRODUCT_SELECT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? { ...product, selected: !product.selected } : product
        ),
        selectAll: false,
      };
    case DELETE_SELECTED_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((product) => !product.selected),
        selectAll: false,
      };
    default:
      return state;
  }
};

export default productReducer;
