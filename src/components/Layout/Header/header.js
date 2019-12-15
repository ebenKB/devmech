import React from 'react'
import Nav from '../navigation/Navigation';
import NavOffset from '../navigation/NavOffset';
import {connect} from 'react-redux';

const header = ({currentUser, isAuthenticated}) => {
  return (
    <div>
      <Nav />
      <NavOffset />
      {
        isAuthenticated && <span>{currentUser.email}</span>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser,
  isAuthenticated: state.user.isAuthenticated,
})

export default connect(mapStateToProps)(header);
