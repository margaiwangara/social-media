import { useState, useContext } from 'react';
import { AuthContext } from '../context/appContext';
import authUser from '../context/actions/authUser';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: ''
}

function useAuthForm(signUp, history){
  const [value, setValue] = useState(initialState);
  const { dispatch, state } = useContext(AuthContext);

  const handleChange = (event) => {
    return setValue({ ...value, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // grab all data in value and add to db
    const path = signUp ? "register" : "login";
    authUser(path, value, dispatch)
        .then(() => {
          // check if is authenticated
          if(state.authState.currentUser.isAuthenticated)
            history.push('/');
          else
            setValue({ ...value, password: '' });
        })    
        .catch(() => {
          return;
        })

    // if errors found don't clear form else clear form
    
   
  }

  return {
    value,
    handleChange,
    handleSubmit
  }
}

export default useAuthForm;