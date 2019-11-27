import React, {useContext} from 'react'
import CartContext from '../../Cart/cartContext';
import CartItem from '../../Cart/CartItem';
import OrderSummary from '../OrderSummary';

const CartOrder = () => {
  const [cart] = useContext(CartContext);
  return (
    <div className="show-cart strict grid columns-12__4 grid-gap__30 m-t-50">
      <div>
        <div className="cart-header">
          <h1>Showing cart ({cart.items.length})</h1>
        </div>
        {
          cart.items.map((item, index)=> {
            return (
              <CartItem item={item} index={index} key={item.id}/>
            );
          })
        }
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  )
}

export default CartOrder
