import React from 'react';

function SignUp(){
  return (
    <form method="post">
      <div className="form-group">
        <label htmlFor="nameField">Name</label>
        <input type="text" className="form-control" name="name" id="nameField"/>
      </div>
      <div className="form-group">
        <label htmlFor="surnameLabel">Surname</label>
        <input type="text" className="form-control" name="surname" id="surnameField"/>
      </div>
      <div className="form-group">
        <label htmlFor="emailField">Email</label>
        <input type="email" className="form-control" name="email" id="emailField" />
      </div>
      <div className="form-group">
        <label htmlFor="passwordField">Password</label>
        <input type="password" className="form-control" name="password" id="passwordField"/>
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}
export default SignUp;