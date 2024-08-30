import React from 'react'

const FeatureCard = ({id, img, name, price}) => {
  return (
    <div className='border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-slate-200  transition duration-200 ease-linear' key={id}>
        <div>
            <img src={img} alt={name || 'Car'} className='rounded-t-xl w-full h-48 object-cover' />
        </div>
        <div className='flex flex-col justify-center items-center p-4'>
            <h1 className='font-semibold text-xl text-primary'>{name || 'Unknown Car'}</h1>
            <div className='font-medium text-lg'>
                <h2>Starting at ${price || 'N/A'}</h2>
            </div>
        </div>
    </div>
  )
}

export default FeatureCard