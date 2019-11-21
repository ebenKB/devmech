import React from 'react'
import { Link  } from 'react-router-dom';

const Item = () => {
  return (
    <Link to={'product/:id'}>
      <div className="item">
        <img src="https://images.yoox.com/37/37900756_14_f.jpg" alt=""/>
        <div className="item-details">
          <div className="item-divider"></div>
          <div>Men's Polo Shirt</div>
          <div>$56.5</div>
        </div>
      </div>
    </Link>
  )
}

export default Item
