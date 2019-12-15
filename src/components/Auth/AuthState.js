import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import AuthContext from './authContext';

import { setCurrentUser  } from '../../redux/user/user.actions';

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

useEffect(() => {
  // check if there is a user in the backend
  const item = JSON.parse(localStorage.getItem('devmech'));
  // console.log('item', item.token);
  if(item.token) {
    setAuth(state => {
      return {
        ...state, 
        isAuthenticated: true,
      }
    })
  }
  
  // eslint-disable-next-line
}, ['isAuthenticated']);

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
      this.setError('an error occurred...');
    }
  } catch(err) {
    console.log('AN ERROR OCCURRED WHILE TRYING TO REGISTER THE USER');
    this.setError('an error occurred...');
  }
};

authActions.Login = async (user) => {
  return new Promise(async(resolve, reject) => {
    try {
      const res = await axios.post('/users/login', user);
      const data = res.data.access_token;
      if(data !== null) {
        const token = data[0];
        const [id, name, email] = data[1];
        const loggedInUser = {
          name,
          email,
          id
        };
      
        localStorage.setItem('devmech', JSON.stringify({
          authUser: loggedInUser,
          token
        }));
    
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
        setCurrentUser(loggedInUser);
        
      }
      resolve(true);
    } catch(err) {
      reject(err);
    }
  })


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
