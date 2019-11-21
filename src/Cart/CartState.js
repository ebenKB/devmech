import  React, {useState} from 'react';
import CartContext from './cartContext';

const CartState = (props) => {
  const [items, setItems] = useState([
    {
      name: 'Mens perform',
      price: 4.00,
      catetory: 'Cosmetics',
    }
  ]);
  // make the cart state available to the app
  return (
    <CartContext.Provider 
      value={[items, setItems]}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartState

