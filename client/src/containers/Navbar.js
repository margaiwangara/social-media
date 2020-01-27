import React, { useContext } from 'react';
import { AuthContext } from '../context/appContext';
import { Link } from 'react-router-dom';

function Navbar(){
  const { state: { authState: { currentUser: { isAuthenticated } }}} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">Social Media</Link>

      <button className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated? (
              <>
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">Sign Out</Link>
                </li>
              </>
            ):(
              <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Log In</Link>
                </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Sign Up</Link>
              </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;