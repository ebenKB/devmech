import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const Protected = ({ component: Component, isAuthenticated}, ...rest) => {
  return (
    <Route 
      {...rest}
      render = {props => !isAuthenticated ?
      (
        <Redirect to="/user/login" />
      ) :
      (
        <Component {...props} />
      )}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Protected);
