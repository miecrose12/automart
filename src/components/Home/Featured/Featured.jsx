import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import FeatureCard from './FeatureCard';

// Import images
import car1 from '/src/assets/img/car1.png';
import car2 from '/src/assets/img/car2.png';
import car3 from '/src/assets/img/car3.png';
import car4 from '/src/assets/img/car4.png';
import car5 from '/src/assets/img/car5.png';
import car6 from '/src/assets/img/car6.png';

const Featured = () => {

    const carsData = [
        {
            id: 0,
            img: car1,
            name: "Cadillac Escalado",
            price: "22,440",
        },
        {
            id: 1,
            img: car2,
            name: "BMW 3 Series",
            price: "54,430",
        },
        {
            id: 2,
            img: car3,
            name: "Mercedes",
            price: "75,120",
        },
        {
            id: 3,
            img: car4,
            name: "BMW 7 Series",
            price: "22,440",
        },
        {
            id: 4,
            img: car5,
            name: "Mercedes-Benz",
            price: "95,298",
        },
        {
            id: 5,
            img: car6,
            name: "Range-Rover",
            price: "22,440",
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed:  2000,
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
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}/>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Featured
