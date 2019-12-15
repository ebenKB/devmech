import React from 'react';
import { Button  } from 'semantic-ui-react';

const LoginForm =({ handleSubmit, handleChange, user, email, password }) => {
  return (
    <div className="form-container m-t-80">
      <form onSubmit={handleSubmit}>
        <div className="form-group m-t-20">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={handleChange}
          />
        </div>
        <div className="form-group m-t-20">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={handleChange}
          />
        </div>
        <div className="form-group m-t-20">
          <Button
            type='submit'
            className={`ui green button ${ user.isLoading ? 'ui loading' : ''}`}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
