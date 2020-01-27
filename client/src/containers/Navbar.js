import React, { useContext } from 'react';
import { AuthContext } from '../context/appContext';

function Navbar(){
  const { state: { currentUser: { isAuthenticated }}} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a href="#home" className="navbar-brand">Social Media</a>

      <button className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated? (
              <>
                <li className="nav-item active">
                  <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#signout" className="nav-link">Sign Out</a>
                </li>
              </>
            ):(
              <>
              <li className="nav-item">
                <a href="#login" className="nav-link">Log In</a>
                </li>
              <li className="nav-item">
                <a href="#signup" className="nav-link">Sign Up</a>
              </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;