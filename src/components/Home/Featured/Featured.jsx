import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import FeatureCard from './FeatureCard';

const Featured = () => {

    const carsData = [
        {
            id:0,
            img: "/src/assets/img/car1.png",
            name: "Cadillac Escalado",
            price: "22,440",
        },
        {
            id:1,
            img: "/src/assets/img/car2.png",
            name: "BMW 3 Series",
            price: "54,430",
        },
        {
            id:2,
            img: "/src/assets/img/car3.png",
            name: "Mercedes",
            price: "75,120",
        },
        {
            id:3,
            img: "/src/assets/img/car4.png",
            name: "BMW 7 Series",
            price: "22,440",
        },
        {
            id:4,
            img: "/src/assets/img/car5.png",
            name: "Mercedes-Benz",
            price: "95,298",
        },
        {
            id:5,
            img: "/src/assets/img/car6.png",
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
                    SlidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    SlidesToScroll: 2,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    SlidesToScroll: 1,
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
                {carsData.map((item) =>(
                    <FeatureCard
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}/>
                )
                    
                )}
            </Slider>
        </div>
    </div>
  )
}

export default Featured