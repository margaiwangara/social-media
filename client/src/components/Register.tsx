import React from 'react';

const Register = () => {
  return (
    <form method="post">
      <label htmlFor="nameField">Name</label>
      <input type="text" placeholder="Name" id="nameField"/>
      <label htmlFor="surnameField">Surname</label>
      <input type="text" placeholder="Surname" id="surnameField"/>
      <label htmlFor="emailAddress">Email</label>
      <input type="email" placeholder="Email" id="emailAddress"/>
      <label htmlFor="passwordField">Password</label>
      <input type="password" name="password" id="passwordField"/>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register;