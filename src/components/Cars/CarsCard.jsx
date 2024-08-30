import React from 'react'
import { Link } from 'react-router-dom';

const CarsCard = ({id, img, name, price, desc}) => {
  console.log("CarsCard props:", {id, img, name, price, desc}); // Add this line

  return (
    <div className='border-1 border-secondary bg-slate-100 text-black rounded-xl mb-4 cursor-pointer overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 max-w-sm mx-auto' key={id}>
        <div className='h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden'>
            <img src={img} alt={name} className='w-full h-full object-cover' />
        </div>
        <div className='p-3 sm:p-4'>
            <h1 className='font-bold text-base sm:text-lg md:text-xl text-primary mb-2'>{name}</h1>
            <p className='text-xs sm:text-sm mb-3 line-clamp-3'>
                {desc || 'No description available.'}
            </p>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0'>
                <h3 className='font-semibold text-base sm:text-lg md:text-xl'>${price}</h3>
                <Link to="/Buy" className='bg-secondary text-white text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-primary transition duration-200 ease-linear w-full sm:w-auto'>Buy Now</Link>
            </div>
        </div>
    </div>
  )
}

export default CarsCard