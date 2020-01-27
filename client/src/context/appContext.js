import React, { createContext, useReducer } from 'react';
import { SET_CURRENT_USER } from './actionTypes';

export const AuthContext = createContext(null);

const initialState = {
  currentUser:{
    isAuthenticated: false,
    user: {}
  },
  error: {}
}

function userReducer(state, action){
  switch(action.type){
    case SET_CURRENT_USER:
      return { ...state, currentUser: {
        isAuthenticated: !!Object.keys(action.payload.user).length,
        user: action.payload.user
      }}
    default: 
      return state;
  }
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