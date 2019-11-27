import React, {useContext} from 'react'
import { Link  } from 'react-router-dom';
// import AuthContext from '../../Auth/authContext';

const Item = () => {
  // const authContext = useContext(AuthContext);
  // const [state] = authContext;
  // const {loading} = state;

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
