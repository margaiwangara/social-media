import React, { createContext, useReducer } from 'react';
import userReducer from './reducers/userReducer';

export const AuthContext = createContext(null);

const initialState = {
  currentUser:{
    isAuthenticated: false,
    user: {}
  },
  error: {}
}

export const AuthProvider = function({ children }){
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div>
        { children}
      </div>
    </AuthContext.Provider>
  )
}