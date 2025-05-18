import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";



const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const url = import.meta.env.VITE_BASE_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${url}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // no confirmPassword
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Signup failed");
        return;
      }

      localStorage.setItem("token", data.token);
      console.log("Signup successful:", data);
      navigate("/dashboard"); // Optional
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server error during signup");
    }
  };
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <UserPlus className="mx-auto h-12 w-12 text-purple-600 dark:text-purple-400" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Sign in
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                         placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md
                         focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
                         dark:bg-gray-700"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                         placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
                         dark:bg-gray-700"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                         placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
                         dark:bg-gray-700"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                         placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md
                         focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
                         dark:bg-gray-700"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium
                       rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-purple-500"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;