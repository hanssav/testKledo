import React from 'react';
import { useForm } from 'react-hook-form';
import { inputData } from '../../../helpers/public/login/InputData';
import Input from '../../../helpers/public/components/Input';
import Navbar from '../../../helpers/public/components/Navbar';
import { validate } from '../../../helpers/public/function/validate';

function Login() {
  const { register, handleSubmit, watch, setValue, setError, clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: 0
    }
  });

  const onSubmit = (data) => {
    const { email, password, rememberMe } = data;
    if (validate(email, password, (fieldErrors) => {
      for (const key in fieldErrors) {
        setError(key, { type: 'manual', message: fieldErrors[key] });
      }
    })) {
      console.log('Form submitted', { email, password, rememberMe });
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setValue(id, checked ? 1 : 0);
    } else {
      setValue(id, value);
    }
    clearErrors(id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          {inputData.map((input) => (
            <Input
              key={input.id}
              label={input.label}
              id={input.id}
              type={input.type}
              {...register(input.id, input.validation)}
              value={watch(input.id)}
              onChange={handleChange}
              error={errors[input.id]?.message}
              checked={input.type === 'checkbox' ? watch(input.id) : undefined}
            />
          ))}

          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
