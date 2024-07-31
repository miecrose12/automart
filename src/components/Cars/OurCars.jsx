import React from 'react';
import { motion } from 'framer-motion';
import CarsCard from './CarsCard';

const OurCars = () => {
    const carsData = [
        { id: 0, img: "/src/assets/img/car1.png", name: "Cadillac Escalade", price: "22,440" },
        { id: 1, img: "/src/assets/img/car2.png", name: "BMW 3 Series", price: "54,430" },
        { id: 2, img: "/src/assets/img/car3.png", name: "Mercedes", price: "75,120" },
        { id: 3, img: "/src/assets/img/car4.png", name: "BMW 7 Series", price: "22,440" },
        { id: 4, img: "/src/assets/img/car5.png", name: "Mercedes-Benz", price: "95,298" },
        { id: 5, img: "/src/assets/img/car6.png", name: "Range-Rover", price: "22,440" },
        { id: 6, img: "/src/assets/img/car7.png", name: "Range-Rover", price: "22,440" },
        { id: 7, img: "/src/assets/img/car8.png", name: "Range-Rover", price: "22,440" },
        { id: 8, img: "/src/assets/img/car9.png", name: "Range-Rover", price: "22,440" },
        { id: 9, img: "/src/assets/img/car10.png", name: "Range-Rover", price: "22,440" },
        { id: 10, img: "/src/assets/img/car11.png", name: "Range-Rover", price: "22,440" },
        { id: 11, img: "/src/assets/img/car12.png", name: "Range-Rover", price: "22,440" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <div className='container pt-24'>
                <h1 className='font-bold text-4xl text-center'>
                    Cars <span className='text-primary'>For Sale</span>
                </h1>
            </div>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 ml-11 mr-11'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {carsData.map((item) => (
                    <motion.div key={item.id} variants={itemVariants}>
                        <CarsCard
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default OurCars;
