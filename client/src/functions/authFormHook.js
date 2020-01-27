import { useState } from 'react';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: ''
}
function useAuthForm(){
  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    return setValue({ ...value, [event.target.name]: event.target.value });
  }

  return {
    value,
    handleChange
  }
}

export default useAuthForm;