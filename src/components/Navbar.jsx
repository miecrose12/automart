import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("AutoCarAppToken");
    localStorage.removeItem("loginFormData");
    window.location.reload();
  };

  const userData = JSON.parse(localStorage.getItem("loginFormData"));
  console.log("UserData:", userData);

  const getUserInitial = (username) => {
    return username ? username.charAt(0).toUpperCase() : "";
  };

  return (
    <header className="fixed w-full z-10 bg-secondary text-white py-4">
      <nav className="container flex justify-between">
        <div className="flex items-center gap-2">
          <GiSteeringWheel size={35} className="text-primary" />
          <Link to="/" className="font-bold text-2xl">
            Auto Mart
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/CarLists"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Car Lists
          </Link>
          {userData && (
            <Link
              to="/CarPost"
              className="hover:text-primary transition duration-200 ease-linear"
            >
              Create Car Post
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-xl relative">
          {userData ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {getUserInitial(userData.username)}
                </div>
                <span
                  className="cursor-pointer flex items-center gap-1"
                  onClick={toggleDropdown}
                >
                  <FaCaretDown />
                </span>
              </div>

              {dropdown && (
                <div className="absolute right-0 mt-36 w-40 bg-white text-black rounded-md shadow-lg z-20">
                  <Link to="/Profile" className="px-1 ml-3 text-xl text-primary cursor-pointer">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 w-8 text-left text-primary hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="border-2 border-primary text-lg px-4 rounded-md hover:text-primary transition duration-200 ease-linear"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border-2 border-primary text-lg px-4 rounded-md hover:text-primary transition duration-200 ease-linear"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuFoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transform duration-300`}
      >
        <Link
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          Home
        </Link>
        <Link
          to="/CarLists"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          Car Lists
        </Link>
        {userData && (
          <Link
            to="/CarPost"
            className="hover:text-primary transition duration-200 ease-linear"
            onClick={handleChange}
          >
            Create Car Post
          </Link>
        )}
        {userData ? (
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              {getUserInitial(userData.username)}
            </div>
            <span>{userData.username}</span>
            <button
              onClick={handleLogout}
              className="border-2 border-primary py-1 px-4 rounded-md mt-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="border-2 border-primary py-1 px-4 rounded-md"
              onClick={handleChange}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border-2 border-primary py-1 px-4 rounded-md"
              onClick={handleChange}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
