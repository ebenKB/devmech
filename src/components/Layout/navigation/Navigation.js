import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Cart from '../../Cart/Cart';
import Logo from '../../../assets/eco.png';
import AuthContext from '../../Auth/authContext';
import './nav.css';

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const [state,,authActions] = authContext;
  const {isAuthenticated} = state;
  console.log('Authetnicatated in nagiation: ', isAuthenticated);

  const handleLogout = () => {
    authActions.Logout();
  }
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-img">
          <img src={Logo} alt=""/>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {
              isAuthenticated && 
              <li role="button" onClick={handleLogout}>Logout</li>
            }
            {
              !isAuthenticated && 
              <li><Link to="/user/login">Login</Link></li>
            }
            {
              !isAuthenticated && 
              <li><Link to="/user/register">Register</Link></li>
            }
          </ul>
          <Cart/>
        </div>
      </div>
    </div>
  )
}

export default Navigation
