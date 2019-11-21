import React, {useContext} from 'react';
import CartContext from './cartContext';
import CartLogo from '../shopping-cart.svg';
import { Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Cart = () => {
  const [items] = useContext(CartContext);

  return(

      <div className="cart-holder">
        <img src={CartLogo} alt=""/>
        <Label circular color="red" className="cart-title">
          {items.length}
        </Label>
      </div>

  )
}

export default Cart;
