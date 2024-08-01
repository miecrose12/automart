import React from 'react';
import { motion } from 'framer-motion';
import img from "../../../assets/img/hero.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='bg-black text-white'>
            <div className='h-screen container flex flex-col justify-center md:flex-row items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full md:w-2/4 space-y-5 mt-10'
                >
                    <motion.h1
                        className='text-4xl lg:text-6xl font-bold leading-tight'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                    >
                        Find Your Perfect Ride Today
                    </motion.h1>
                    <motion.p
                        className='text-lg lg:text-2xl font-medium'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                    >
                        Varieties Of Cars Are Available Here Choose The One That Fits You
                    </motion.p>
                    <motion.p
                        className='text-sm lg:text-base'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
                    >
                        At Auto Mart We Have The Best Offers At Moderate Prices
                    </motion.p>
                    <motion.div
                        className='flex gap-8'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
                    >
                        <Link
                            to="carpost"
                            className='bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear'
                        >
                            Create Car Post
                        </Link>
                        <Link
                            to="/carlists"
                            className='border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition duration-200 ease-linear'
                        >
                            See Cars
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
                    className='w-full md:w-2/4 mt-4'
                >
                    <motion.img
                        src={img}
                        alt="img"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
