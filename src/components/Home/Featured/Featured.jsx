import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import FeatureCard from './FeatureCard';

const Featured = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCarsData = async () => {
            try {
                const response = await axios.get('https://auto-mart-apis-nodejs-mongodb.onrender.com/api/cars');
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

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                },
            },
        ]
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='container mt-14'>
            <h1 className='font-bold text-4xl text-center'>
                Featured <span className='text-primary'>Cars</span>
            </h1>

            <p className='text-center'>
                Some of the cars available here at Auto-Mart 
            </p>
            <div className='mt-8'>
                <Slider {...settings}>
                    {carsData.map((item) => (
                        <FeatureCard
                            key={item._id || item.id}
                            img={item.imageUrl || item.image}
                            name={item.model_name || item.car_name}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Featured