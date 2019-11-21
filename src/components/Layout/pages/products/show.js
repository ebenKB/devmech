import React, { useContext } from 'react';
import CartContext from '../../../../Cart/cartContext';

const Show = () => {
  const [items, setItems] = useContext(CartContext);

  const handleClick =() => {
    // append a new item to the cart
    setItems(oldCart => [...oldCart, {
      name: 'Cart item name',
      price: 5.65,
      category: 'Cat item category'
    }])
  };

  return (
    <div>
      Show the product details here... {items.length}
      <button 
        className="ui primary buttton"
        onClick={ handleClick }
      >Add to cart</button>
    </div>
  );
}

export default Show;

