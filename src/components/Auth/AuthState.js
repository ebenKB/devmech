import React, {useState} from 'react';
import Axios from 'axios';
import AuthContext from './authContext';

// set custom defaults for axios

const axios = Axios.create({
  baseURL: 'https://mech-api.herokuapp.com/api/v1',
  // timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

const AuthState = (props) => {

const [state, setAuth] = useState({
  token: '',
  isAuthenticated: false,
  loading: true,
  error: null,
  user: null,
});

// define actions for the auth state
const authActions = {}

// Register user
  authActions.registerUser = async (formData) => {
  try {
    const res = await axios.post('/users', formData);
    if(res.status === 201 || res.status === 200) {
      // redirect to login
      props.histroy.push('/login')
    } else {
      console.log('This is the status', res);
      this.setError('an error occurred...');
    }
  } catch(err) {
    console.log('AN ERROR OCCURRED WHILE TRYING TO REGISTER THE USER');
  }
};

authActions.Login = async (user) => {
  const res = await axios.post('/users/login', user);
  const data = res.data.access_token;
  const token = data[0];
  const [id, name, email] = data[1];
  const loggedInUser = {
    name,
    email,
    id
  };

  localStorage.setItem('devmech-token', token);

  // update the state
  setAuth(state => {
    return {
      ...state,
      user: loggedInUser,
      token,
      isAuthenticated: true,
      loading: false,
    }
  });
};

authActions.Logout =() => {
  setAuth(state => {
   return {
     ...state,
     isAuthenticated: false,
   }
  });
  localStorage.removeItem('devmech-token');
}

authActions.authenticateUser = () => {
  setAuth({
    isAuthenticated: true,
  });
};

authActions.setError =(error) => {
  setAuth({
    error
  });
};

authActions.setToken = (token) => {
  localStorage.setItem({'dev-token' : token});
};

authActions.setLoading = (status) => {
  setAuth({
    loading: status,
  });
};

return (
  <AuthContext.Provider 
    value = {[state, setAuth, authActions]}
  >
    {props.children}
  </AuthContext.Provider>
  );
}

export default AuthState;
