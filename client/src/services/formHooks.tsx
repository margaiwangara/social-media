import React, { useState, ChangeEvent } from 'react';

export const useForm = () => {
  const [value, setValue] = useState({
    name: '',
    surname: '',
    email:'',
    password: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return {
    handleChange,
    value
  }
}