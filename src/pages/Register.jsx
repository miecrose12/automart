import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    first_name: '',
    last_name: '',
    address: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
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

    try {
      const response = await axios.post('https://auto-mart-apis-nodejs-mongodb.onrender.com/api/users/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success('User registered successfully!');
      
      setFormData({
        username: '',
        email: '',
        mobile: '',
        first_name: '',
        last_name: '',
        address: '',
        password: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error registering user. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="port min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
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
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2 capitalize">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2 capitalize">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2 capitalize">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2 capitalize">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2 capitalize">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2 capitalize">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200">
            Register
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;