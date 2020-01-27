import React from 'react';
import Navbar from './containers/Navbar';
import { AuthProvider } from './context/appContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Navbar/>
    </AuthProvider>
  );
}

export default App;
