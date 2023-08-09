import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct, toggleSelectAll, deleteSelectedProducts, toggleProductSelect } from '../actions/productActions';

const ProductForm = ({ products, selectAll, addProduct, toggleSelectAll, deleteSelectedProducts, toggleProductSelect }) => {
    const [productName, setProductName] = useState('');
  
    const handleAddProduct = () => {
      addProduct(productName);
      setProductName('');
    };
  
    const handleToggleProductSelect = (productId) => {
      toggleProductSelect(productId);
    };
  
    
  return (
    <div>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <button className="action-button add-button" onClick={handleAddProduct}>Add Product</button>
      <button className="action-button select-all-button" onClick={toggleSelectAll}>{selectAll ? 'Unselect All' : 'Select All'}</button>
      <button className="action-button delete-selected-button" onClick={deleteSelectedProducts}>Delete Selected</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <input
              type="checkbox"
              checked={product.selected}
              onChange={() => handleToggleProductSelect(product.id)}
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
    selectAll: state.selectAll,
  });
  
  export default connect(mapStateToProps, { addProduct, toggleSelectAll, deleteSelectedProducts, toggleProductSelect })(ProductForm);