import { useState, ChangeEvent, useReducer } from 'react';
import { authUser } from '../context/actions/auth';
import userReducer from '../context/reducers/userReducer';
import { SET_CURRENT_USER } from '../context/types';

const initialAppState = {
  isAuthenticated: false,
  user: {}
}

const initialState: object | any = {
  name: '',
  surname: '',
  email:'',
  password: ''
};

export const useForm = (signUp?: boolean) => {
  const [value, setValue] = useState(initialState);
  const [state, dispatch] = useReducer(userReducer, initialAppState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const authType: string = signUp ? "register" : "login";
    authUser(authType, value, dispatch).then(() => console.log('Auth Happened'));
  }

  return {
    value,
    handleChange,
    handleSubmit
  }
}