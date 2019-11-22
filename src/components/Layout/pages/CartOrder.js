import React, {useContext} from 'react'
import CartContext from '../../Cart/cartContext';
import CartItem from '../../Cart/CartItem';

const CartOrder = () => {
  const [items, updateCart] = useContext(CartContext);
  return (
    <div className="show-cart strict grid columns-12__4 grid-gap__30 m-t-50">
      <div>
        <div className="cart-header">
          <h1>Showing cart ({items.length})</h1>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div>
        <div className="cart-order__summary rounded">
          <h2>Order summary</h2>
        </div>
      </div>
    </div>
  )
}

export default CartOrder
