import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('loginFormData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://auto-mart-apis-nodejs-mongodb.onrender.com/api/users/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { token, ...rest } = response.data.data;

      localStorage.setItem("AutoCarAppToken", `Bearer ${token}`);
      localStorage.setItem('loginFormData', JSON.stringify(rest));
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="port min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2 capitalize">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2 capitalize">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <Link to="/forgot_password" className="text-primary-500 hover:text-primary-700 transition duration-200 ease-in-out cursor-pointer">Forgot password?</Link>

        </form>
      </div>
    </div>
  );
};

export default Login;
