import React from 'react'
import {Link} from 'react-router-dom'
import Cart from '../../Cart/Cart';

const Navigation = () => {
  return (
    <div className="nav">
      <div>one</div>
      <div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  )
}

export default Navigation
