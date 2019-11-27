import  React, {useState} from 'react';
import CartContext from './cartContext';

const CartState = (props) => {
  const [cart, setItems] = useState(
    {
      isOpen: false,
      items: [
        {
          name: 'Mens perform',
          price: 4.00,
          catetory: 'Cosmetics',
          id: '7787gghg656888uuu',
        }
      ]
    }
  );
  // make the cart state available to the app
  return (
    <CartContext.Provider 
      value = {[cart, setItems]}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartState

