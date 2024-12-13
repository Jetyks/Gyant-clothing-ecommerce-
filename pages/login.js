import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();
  

  const onSubmit = async (data) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      setIsLoggedIn(true)
      router.push('/');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {

      router.push("/") // Redirige a la página de "Home"
    }
  }, [isLoggedIn]);

  return (
    <div className="flex p-20 justify-center min-h-screen bg-gray-100">
      <div className="h-80 w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-yellow-950">Welcome back!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className=''>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input className={`w-full px-4 py-2 mt-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-900`}
            id="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })} />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
            className={`w-full px-4 py-2 mt-1 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-900`}
            id="password"
            type="password"
            {...register("password", { required: "Password is required",
            minLength: { value: 4, message: "Password must be at least 4 characters" }
            })} />
            {errors.password && <span>This field is required</span>}
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button
          className="w-full px-4 py-2 text-white bg-yellow-950 rounded-lg hover:bg-yellow-900 focus:outline-none"
          type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
