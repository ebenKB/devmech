import React, {useState, useContext} from 'react'
import LoginContext from './authContext';
import CartContext from '../Cart/cartContext';

const Login = (props) => {
  // the user who will login
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [state, setAuth, authActions] = useContext(LoginContext);
  const [,setItems] = useContext(CartContext);

  // Login user
  const login =() => {
    authActions.Login(user);
    setItems(oldState => {
      return {
        isOpen: true,
        items: [...oldState.items],
      }
    });
    // authActions.authenticateUser();
    console.log('This is the props object', props);
    props.history.goBack();
  }

  const handleChange = (e) => setUser({...user,  [e.target.name] : e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== '' && email !== '') {
      login();
    } else {
      authActions.setError('Email/password is blank');
    }
  }

  const {email, password } = user;
  return (
    <div className="form-container">
      <h1>Login From Here</h1>
      <h2>Token: {state.token}</h2>
      {
        state.error && 
        <div className="ui red label m-t-20 m-b-20">{state.error}</div>
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group m-t-20">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={handleChange}/>
        </div>
        <div className="form-group m-t-20">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handleChange}/>
        </div>
        <div className="form-group m-t-20">
          <input type="submit" value="Login" className="ui green button"/>
        </div>
      </form>
    </div>
  )
}

export default Login;
