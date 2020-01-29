import React, { useContext } from 'react';
import authForm from '../functions/authFormHook';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../context/appContext';
import { removeError } from '../context/actions/error';

function AuthForm({ signUp, history }) {
  const { handleChange, value, handleSubmit } = authForm(signUp, history);
  const {
    state: { errorState }
  } = useContext(AuthContext);

  // change in route
  history.listen(() => {
    removeError();
  });

  return (
    <form method="post" onSubmit={handleSubmit}>
      {!!Object.keys(errorState.error).length && (
        <div className="alert alert-danger">{errorState.error.message}</div>
      )}
      {signUp && (
        <>
          <div className="form-group">
            <label htmlFor="nameField">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="nameField"
              onChange={handleChange}
              value={value.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surnameLabel">Surname</label>
            <input
              type="text"
              className="form-control"
              name="surname"
              id="surnameField"
              onChange={handleChange}
              value={value.surname}
            />
          </div>
        </>
      )}
      <div className="form-group">
        <label htmlFor="emailField">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="emailField"
          onChange={handleChange}
          value={value.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordField">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="passwordField"
          onChange={handleChange}
          value={value.password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {signUp ? 'Register' : 'Log In'}
      </button>
    </form>
  );
}

export default withRouter(AuthForm);
