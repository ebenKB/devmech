import React, {useContext} from 'react'
import CartContext from '../../components/Cart/cartContext';

import './cartSummary.css'

const CartSummary = () => {
  const [cart, setItems] = useContext(CartContext);
  
  const handleClick = () => {
    console.log('handling click event')
  }

  return (
    <div>
      <p>
        Hollister teddy borg lined hooded puffer in black
      </p>
      <p>This product ships to your location</p>
      <h3>$ 54.9</h3>
      <div>
        Size: 
        <select name="" id="">
          <option value="">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div>
        <button 
          className="ui green large button"
          onClick={ handleClick }
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default CartSummary
