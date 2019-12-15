import React, {useState } from 'react'
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import  Axios  from 'axios';
import LoginForm from '../Layout/forms/login/Login';

const axios = Axios.create({
  baseURL: 'https://mech-api.herokuapp.com/api/v1',
  headers: {'Content-Type': 'application/json'}
});

const Login = ({setCurrentUser, history}) => {
  // the user who will login
  const [user, setUser] = useState({
    email : '',
    password : '',
    isLoading: false,
  });

  const handleChange = (e) => setUser({...user,  [e.target.name] : e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser((oldState) => {
      return{
        ...oldState,
        isLoading : true,
      }
    });

    // check if the data is valid to submit
    if(password !== '' && email !== '') {
      try {
        const res = await axios.post('/users/login', user);
        const data = res.data.access_token;
        
        // get the details of the user from the response
        const token = data[0];
        const [id, name, email] = data[1];
        const loggedInUser = { name, email, id };
  
        setUser((oldState) => {
          return {
            ...oldState,
            isLoading: false,
          }
        });
        setCurrentUser(loggedInUser);
  
        // save the details to local storage
        localStorage.setItem('devmech', JSON.stringify({
          authUser : loggedInUser,
          token
        }));
        history.goBack();
      } catch(err) {
        setUser((oldState) => {
          return {
            ...oldState,
            isLoading: false,
          }
        });
      }
    }
  }

  const {email, password } = user;
  return (
    <LoginForm 
      user={user}
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
