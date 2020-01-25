import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="inner-container">
        <Route exact path="/" render={() => <h1>Home Route</h1>} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
      </div>
    </Router>
  );
}

export default App;
