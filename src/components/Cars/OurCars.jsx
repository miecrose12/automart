import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import CarsCard from './CarsCard';

const OurCars = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    console.log('kkk',carsData)

    useEffect(() => {
        const fetchCarsData = async () => {
            try {
                const response = await axios.get('https://auto-mart-apis-nodejs-mongodb.onrender.com/api/cars');
                console.log('API Response:', response.data); 
                if (response.data && Array.isArray(response.data.data)) {
                    setCarsData(response.data.data);
                } else {
                    throw new Error('Invalid data format received from API');
                }
            } catch (error) {
                setError('Failed to fetch car data. Please try again later.');
                console.error('Error fetching car data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarsData();
    }, []);

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
                    <motion.div key={item._id || item.id} variants={itemVariants}>
                                <CarsCard
            id={item._id || item.id}
            img={item.imageUrl || item.image}
            name={item.model_name || item.title}
            price={item.price}
            desc={item.desc || item.description} // Add this line
        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default OurCars;