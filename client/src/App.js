import React from 'react';
import Navbar from './containers/Navbar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import PrivateRoute from './containers/PrivateRoute';
import Homepage from './components/Homepage';
import { AuthProvider } from './context/appContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div className="container py-3">
          <PrivateRoute exact path="/" component={Homepage}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/register" component={SignUp}/>
          <Route exact path="/logout" component={() => <h3>Route to Logout</h3>}/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
