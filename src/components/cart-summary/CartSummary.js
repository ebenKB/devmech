import React from 'react'
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import './cartSummary.css'

const CartSummary = ({addItemToCart}) => {
  const handleclick = () => {
    addItemToCart({
      id: 4,
      name: 'shoes from canada',
    });
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
          onClick={ handleclick }
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart : (item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CartSummary)
