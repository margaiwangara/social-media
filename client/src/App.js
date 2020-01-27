import React from 'react';
import Navbar from './containers/Navbar';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/appContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <div className="container">
        <SignUp/>
      </div>
    </AuthProvider>
  );
}

export default App;
