import React, { useContext } from 'react';
import CartContext from '../../../Cart/cartContext';

const Show = () => {
  const [cart, setItems] = useContext(CartContext);

  const handleClick =() => {
    // append a new item to the cart
    setItems(oldCart => {
      return {
        items: [...oldCart.items, {
          name: 'Cart item name',
          price: 5.65,
          category: 'Cat item category'
        }]
      }
    })
  };

  return (
    <div className="md-container">
      <div className="left">one</div>
      <div className="main">
        <img src="https://images.asos-media.com/products/esprit-organic-turtle-neck-jumper-in-black/14150142-1-black?$n_640w$&wid=634&fit=constrain" alt=""/>
      </div>
      <div className="right">
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
          {cart.items.map(item => {
            return(
              <div>{item.price}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Show;

