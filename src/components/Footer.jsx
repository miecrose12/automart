import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">Auto Mart</h1>
          <p className=" mb-2 text-sm">
            Looking for an online Space To Put You Car Online For Sale? AutoMart Is The One For You.
            
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            pages Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/carlists"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Cars
            </Link>
            <Link
              to="/about"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Services
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Used Cars for sale
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/carlists"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Toyota Camry
            </Link>
            <Link
              to="/carlists"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/carlists"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/carlists"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>

        
      </div>
      
    </footer>
  );
};

export default Footer;