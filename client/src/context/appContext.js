import React, { createContext, useReducer } from 'react';
import authReducer from './reducers/authReducer';
import errorReducer from './reducers/errorReducer'
export const AuthContext = createContext(null);

const initialState = {
  currentUser:{
    isAuthenticated: false,
    user: {}
  },
  error: {}
}

export const AuthProvider = function({ children }){
  const { currentUser, error } = initialState;
  const [authState, authDispatch] = useReducer(authReducer, { currentUser });
  const [errorState, errorDispatch ] = useReducer(errorReducer, { error });

  return (
    <AuthContext.Provider value={{ 
            state:{ authState, errorState }, 
            dispatch: { authDispatch, errorDispatch } 
        }}>
      <div>
        { children }
      </div>
    </AuthContext.Provider>
  )
}