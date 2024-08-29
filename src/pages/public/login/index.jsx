import React from 'react';
import axios from 'axios'; 
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { inputData } from '../../../helpers/public/login/InputData';
import Input from '../../../helpers/public/components/Input';
import Navbar from '../../../helpers/public/components/Navbar';
import { validate } from '../../../helpers/public/function/validate';
import { loginUser } from '../../../store/authSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, setError, clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setValue(id, checked);
    } else {
      setValue(id, value);
    }
    clearErrors(id);
  };

  const onSubmit = async (data) => {
    const { email, password, rememberMe } = data;
    try {
      if (validate(email, password, (fieldErrors) => {
        for (const key in fieldErrors) {
          setError(key, { type: 'manual', message: fieldErrors[key] });
        }
      })) {
        const response = await axios.post('https://api.jokolodang.com/api/v1/authentication/login', {
          email,
          password,
          rememberMe
        });

        dispatch(loginUser(response.data));
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
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
