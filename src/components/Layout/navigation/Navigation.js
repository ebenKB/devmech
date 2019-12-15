import React from 'react'
import {Link} from 'react-router-dom'
import Cart from '../../Cart/Cart';
import Logo from '../../../assets/eco.png';
import { connect } from 'react-redux';
import { revokeAuth } from '../../../redux/user/user.actions';
import './nav.css';

const Navigation = ({revokeAuth, isAuthenticated}) => {
  // logout user
  const handleLogout = () => {
    revokeAuth();
    localStorage.removeItem('devmech-token');
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
              <li>
                <Link to="/user/login">Login</Link>
              </li>
            }
            {
              !isAuthenticated && 
              <li>
                <Link to="/user/register">Register</Link>
              </li>
            }
          </ul>
          <Cart/>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  revokeAuth : () => dispatch(revokeAuth())
});

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)
