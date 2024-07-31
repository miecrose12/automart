import React from "react";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("loginFormData"));
  console.log("PROFFFFIILLLL:", userData);

  return (
    <div className="min-h-screen flex items-center port justify-center bg-gray-200 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Profile
        </h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              Username
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm">
              {userData?.username}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              Email
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm"></p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              Mobile
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm"></p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              First Name
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm"></p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              Last Name
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm"></p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              Password
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm">
              ********
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm">
              Change Password
            </label>
            <p className="border border-gray-300 px-3 py-1 rounded-md bg-gray-50 text-sm">
              Click here to change
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
