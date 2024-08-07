import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      console.log("token:"); 
        if (!token) {
            setMessage('Invalid reset link');
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post(`https://auto-mart-apis-nodejs-mongodb.onrender.com/api/users/complete-reset-password/${token}`, { 
                password: newPassword, 
            });
            setMessage(response.data.message || 'Password reset successful');
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="port flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
                {message && <p className="text-sm text-center mb-4" style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConfirmPassword;