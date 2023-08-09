import React from 'react';
import { connect } from 'react-redux';
import { toggleProductSelect } from '../actions/productActions';

const ProductList = ({ products, toggleProductSelect }) => {
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              onClick={() => toggleProductSelect(product.id)}
              style={{ textDecoration: product.selected ? 'line-through' : 'none' }}
            >
              <input
                type="checkbox"
                checked={product.selected}
                onChange={() => toggleProductSelect(product.id)}
              />
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    products: state.products,
  });
  
  export default connect(mapStateToProps, { toggleProductSelect })(ProductList);