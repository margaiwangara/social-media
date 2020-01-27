import React from 'react';
import './App.css';
import { AuthProvider } from './context/appContext';

function App() {
  return (
    <AuthProvider>
      <p>This is my day</p>
    </AuthProvider>
  );
}

export default App;
