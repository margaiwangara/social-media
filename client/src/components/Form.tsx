import React, { Fragment } from 'react'

function Form({ signUp }:any) {
  return (
    <form method="post">
      {signUp && (
          <Fragment>
            <div className="form-group">
              <label htmlFor="nameField">Name</label>
              <input type="text" name="name" id="nameField"/>
            </div>
            <div className="form-group">
              <label htmlFor="surnameField">Surname</label>
              <input type="text" name="surname" id="surnameField"/>
            </div>
          </Fragment>
        )
      }
      <div className="form-group">
        <label htmlFor="emailField">Email</label>
        <input type="email" name="email" id="emailField"/>
      </div>
      <div className="form-group">
        <label htmlFor="passwordField">Password</label>
        <input type="password" name="password" id="passwordField"/>
      </div>
    <button type="submit" className="btn btn-primary">{signUp ? 'Sign Up' : 'Log In'}</button>
    </form>
  )
}

export default Form;
