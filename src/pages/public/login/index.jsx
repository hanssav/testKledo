import React, { useState } from 'react';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import { validate } from '../function/validate';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(email, password, setErrors)) {
      console.log('Form submitted');
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
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

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
