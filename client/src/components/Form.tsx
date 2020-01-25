import React, { Fragment } from 'react'
import { useForm } from '../services/formHooks';

function Form({ signUp }:any) {
  const { handleChange, value } = useForm();

  return (
    <form method="post">
      {signUp && (
          <Fragment>
            <div className="form-group">
              <label htmlFor="nameField">Name</label>
              <input type="text" name="name" id="nameField" onChange={handleChange} value={value.name}/>
            </div>
            <div className="form-group">
              <label htmlFor="surnameField">Surname</label>
              <input type="text" name="surname" id="surnameField" onChange={handleChange} value={value.surname}/>
            </div>
          </Fragment>
        )
      }
      <div className="form-group">
        <label htmlFor="emailField">Email</label>
        <input type="email" name="email" id="emailField" onChange={handleChange} value={value.email}/>
      </div>
      <div className="form-group">
        <label htmlFor="passwordField">Password</label>
        <input type="password" name="password" id="passwordField" onChange={handleChange} value={value.password}/>
      </div>
    <button type="submit" className="btn btn-primary">{signUp ? 'Sign Up' : 'Log In'}</button>
    </form>
  )
}

export default Form;
