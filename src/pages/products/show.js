import React from 'react';
import CartSummary from '../../components/cart-summary/CartSummary';

const Show = () => {
  return (
    <div className="md-container">
      <div className="left">one</div>
      <div className="main">
        <img src="https://images.asos-media.com/products/esprit-organic-turtle-neck-jumper-in-black/14150142-1-black?$n_640w$&wid=634&fit=constrain" alt=""/>
      </div>
      <div className="right">
        <CartSummary />
      </div>
    </div>
  );
}

export default Show;

