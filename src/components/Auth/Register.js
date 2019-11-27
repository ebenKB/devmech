import React, { useState, useContext, useEffect} from 'react'
import AuthContext from './authContext';


const Register = () => {
  // define a user for the component level
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  // destructure the fields for the user into variables
  const {name, email, password, password_confirmation} = user;
  const [state, setAuth, authActions] = useContext(AuthContext);

  // get the user details from the state
  // const {email, pass} = state.user

  useEffect(() => {
    console.log('Something depends on state and it has changed ....')
  }, [state.isAuthenticated]) 


  const handleChange = (e) => setUser({...user,  [e.target.name] : e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if the password and password confirmation match
    if(password === password_confirmation && password !== '') {
      // make a call to the api to register the user
      authActions.registerUser(user);
    } else {
      authActions.setError("Sorry passwords do not match");
    }
  }

  // const {name, email, pass, pass2} = state;
  return (
    <div className="form-container m-t-40">
      <h1>Register user Here</h1>
      <h2>Token: {state.token}</h2>
      { state.error &&       
        <div className="m-t-20 m-b-20 ui red label">
          {state.error}
        </div>
      }
      {
        state.user && <p>{state.user.name}</p>
      }
      <p>
        Name: {user.name}
      </p>
      <p>
        Password: {user.password}
      </p>
      <p>
        Password 2: {user.password_confirmation}
      </p>
      {
        state.isAuthenticated && <div>The user is Authenticated </div>
      }
      <form onSubmit={handleSubmit}>
        <div className="m-t-40 form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange}/>
        </div>
          <div className="m-t-40 form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} name="email" onChange={handleChange}/>
        </div>
        <div className="m-t-40 form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} id="" onChange={handleChange}/>
        </div>
        <div className="m-t-40 form-group">
          <label htmlFor="Password confirmation">Password confirmation</label>
          <input type="password" name="password_confirmation" value={password_confirmation} onChange={handleChange}/>
        </div>
        <div className="m-t-40 form-group">
          <input type="submit" value="Submit" className="ui primary button"/>
        </div>
      </form>
    </div>
  )
}

export default Register;
