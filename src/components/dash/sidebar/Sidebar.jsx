import React, { useState } from 'react';

const userData = JSON.parse(localStorage.getItem("loginFormData"));

const getUserInitial = (username) => {
  return username ? username.charAt(0).toUpperCase() : "";
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden fixed top-4 left-4 z-20 bg-gray-800 text-white p-2 rounded-md"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 transition duration-200 ease-in-out
        bg-gray-800 text-white w-64 space-y-6 py-7 px-2 
        md:w-64 md:flex md:flex-col md:min-h-screen
      `}>
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-3xl font-bold">
            {getUserInitial(userData?.username)}
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a 
                href="#" 
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Profile
              </a>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;