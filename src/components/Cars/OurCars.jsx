import React from 'react';
import { motion } from 'framer-motion';
import CarsCard from './CarsCard';
import Car1 from "../../assets/img/car1.png"
import Car2 from "../../assets/img/car2.png"
import Car3 from "../../assets/img/car3.png"
import Car4 from "../../assets/img/car4.png"
import Car5 from "../../assets/img/car5.png"
import Car6 from "../../assets/img/car6.png"
import Car7Image from "../../assets/img/car7.png"
import Car8 from "../../assets/img/car8.png"
import Car9 from "../../assets/img/car9.png"
import Car10 from "../../assets/img/car10.png"
import Car11 from "../../assets/img/car11.png"
import Car12 from "../../assets/img/car12.png"

const OurCars = () => {
    const carsData = [
        { id: 0, img: Car1, name: "Cadillac Escalade", price: "22,440" },
        { id: 1, img: Car2, name: "BMW 3 Series", price: "54,430" },
        { id: 2, img: Car3, name: "Mercedes", price: "75,120" },
        { id: 3, img: Car4, name: "BMW 7 Series", price: "22,440" },
        { id: 4, img: Car5, name: "Mercedes-Benz", price: "95,298" },
        { id: 5, img: Car6, name: "Range Rover", price: "22,440" },
        { id: 6, img: Car7Image, name: "Range Rover", price: "22,440" },
        { id: 7, img: Car8, name: "Range Rover", price: "22,440" },
        { id: 8, img: Car9, name: "Range Rover", price: "22,440" },
        { id: 9, img: Car10, name: "Range Rover", price: "22,440" },
        { id: 10, img: Car11, name: "Range Rover", price: "22,440" },
        { id: 11, img:  Car12, name: "Range Rover", price: "22,440" },
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
