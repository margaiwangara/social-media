import React, { createContext, useReducer } from 'react';
import authReducer from './reducers/authReducer';

export const AuthContext = createContext(null);

const initialState = {
  currentUser:{
    isAuthenticated: false,
    user: {}
  },
  error: {}
}

export const AuthProvider = function({ children }){
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div>
        { children}
      </div>
    </AuthContext.Provider>
  )
}