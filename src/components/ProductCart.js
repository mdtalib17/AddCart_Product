import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
// new thin
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="product-cart">
      <div className="product-list">
        <ProductItem
          product={{ name: 'Product 1', image: 'product1.jpg', price: 9.99 }}
          onAddToCart={handleAddToCart}
        />
        <ProductItem
          product={{ name: 'Product 2', image: 'product2.jpg', price: 19.99 }}
          onAddToCart={handleAddToCart}
        />
        <ProductItem
          product={{ name: 'Product 3', image: 'product3.jpg', price: 29.99 }}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total: {totalPrice.toFixed(2)}</p>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCart;
