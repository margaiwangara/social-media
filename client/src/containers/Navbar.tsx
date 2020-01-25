import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/appContext';

const Navbar = () => {
  const { currentUser } = useContext(AppContext);
  
  return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <Link to="/" className="navbar-brand" href="#">Social Media</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            {currentUser.isAuthenticated ? (
              <Fragment>
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signout" className="nav-link">Sign Out</Link>
                </li>
              </Fragment>
            ):
              <Fragment>
                <li className="nav-item active">
                  <Link to="/login" className="nav-link">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
              </Fragment>
            }
          </ul>
        </div>
        </nav>
  );
}

export default Navbar;
