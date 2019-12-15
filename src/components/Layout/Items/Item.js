import React, {useState} from 'react'
import { Link  } from 'react-router-dom';

const Item = ({item}) => {
  const {id, name, price, imageUrl} = item;
  
  useState({

  });
  
  return (
    <Link
      to ={`product/${id}`}
      className="item card-panel hoverable">
      <img src={imageUrl} alt="avatart"/>
      <div className="item-details">
        <div className="item-divider m-b-5"></div>
        <div className="m-l-20">
          <div>{name}</div>
          <div className="caption-bold m-r-80 m-t-10 m-b-10">
            ${price}
          </div> 
        </div>
      </div>
    </Link>
  )
}

export default Item
