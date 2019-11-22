import React, {useContext} from 'react'
import CartContext from '../Cart/cartContext';

const CartItem = ({item, index}) => {
  const [items, setItems] =useContext(CartContext);

  //  handle actions
  const removeItem =() => {
    setItems(items => []);
  }

  return (
    <div className="cart-item strict grid columns-4__12 grid-gap__10">
      <div>
        <div className="img-caption">
          <img 
            src="https://i0.wp.com/www.elegantlinen.com/wp-content/uploads/2018/01/GREEK-KEY-TAUPE-.jpg?fit=2134%2C1889&ssl=1" 
            alt=""
            className="img-rounded"
          />
        </div>
      </div>
      <div>
        <p>
          Gray Pink 4pcs Girl Boy Kid Bed Cover Set Duvet Cover Adult Child Bed Sheets And Pillowcases Comforter Bedding Set 2TJ-61005
        </p>
        <p>
          Shipping: US $19.49
          via China Post Registered Air Mail
          Estimated Delivery Time:37-57 Days
          1
          </p>
        <button 
          className="ui default button btn-sticky"
          onClick={removeItem}
        >Remove from cart</button>
      </div>
    </div>
  )
}

export default CartItem
