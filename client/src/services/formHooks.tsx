import { useState, ChangeEvent } from 'react';

const initialState: object | any = {
  name: '',
  surname: '',
  email:'',
  password: ''
};

export const useForm = () => {
  const [value, setValue] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    
  }

  return {
    value,
    handleChange,
    handleSubmit
  }
}