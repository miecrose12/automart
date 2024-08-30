import React from 'react';

const UserDetails = () => {
  const userData = JSON.parse(localStorage.getItem("loginFormData"));

  const DetailItem = ({ label, value }) => (
    <div className="mb-6 sm:mb-4">
      <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
      <p className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg bg-gray-50 text-lg">
        {value || 'N/A'}
      </p>
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 sm:p-6 max-w-2xl sm:max-w-xl mx-auto mt-12 sm:mt-8">
      <h2 className="text-3xl sm:text-2xl font-bold mb-8 sm:mb-6 text-center text-gray-800">User Details</h2>
      <div className="space-y-6 sm:space-y-4">
        <DetailItem label="Username" value={userData?.username} />
        <DetailItem label="Email" value={userData?.email} />
        <DetailItem label="Mobile" value={userData?.mobile} />
        <DetailItem label="First Name" value={userData?.first_name} />
        <DetailItem label="Last Name" value={userData?.last_name} />
      </div>
    </div>
  );
};

export default UserDetails;