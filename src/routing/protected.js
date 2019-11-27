import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';

import AuthContext from '../components/Auth/authContext';

const Protected = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const [state] = authContext;
  
  const {isAuthenticated} = state;

  return (
    <Route 
      {...rest}
      render={props => !isAuthenticated ?
      (
        <Redirect to="/user/login" />
      ) :
      (
        <Component {...props} />
      )}
    />
  );
}

export default Protected;

