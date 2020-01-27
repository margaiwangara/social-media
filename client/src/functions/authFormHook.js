import { useState, useContext } from 'react';
import { AuthContext } from '../context/appContext';
import { SET_CURRENT_USER } from '../context/actionTypes';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: ''
}
function useAuthForm(){
  const [value, setValue] = useState(initialState);
  const { dispatch } = useContext(AuthContext);

  const handleChange = (event) => {
    return setValue({ ...value, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // grab all data in value and add to db
    dispatch({
      type: SET_CURRENT_USER,
      payload:{
        user: { ...value }
      }
    });
  }

  return {
    value,
    handleChange,
    handleSubmit
  }
}

export default useAuthForm;