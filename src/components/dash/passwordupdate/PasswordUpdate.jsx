import React from 'react';

const PasswordUpdate = () => {
  const InputField = ({ label, id, type = "password" }) => (
    <div className="mb-6">
      <label htmlFor={id} className="block text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Change Password</h2>
      <form className="space-y-6">
        <InputField label="Old Password" id="old-password" />
        <InputField label="New Password" id="new-password" />
        <InputField label="Confirm Password" id="confirm-password" />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-semibold"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default PasswordUpdate;