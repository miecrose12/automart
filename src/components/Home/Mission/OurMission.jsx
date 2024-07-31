import React from 'react'
import img from "../../../assets/img/mission.jpg"

const OurMission = () => {
  return (
    <div className='container my-10'>
        <div>
            <h1 className='font-bold text-4xl text-center'>Why <span className='text-primary'>Automart</span></h1>
        </div>

        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
            <div className='w-full md:w-2/4'>
                <img src={img} alt="img" className='rounded-lg' />
            </div>

            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='font-bold text-primary text-lg lg:text-3xl '>Auto Mart is an online marketplace for automobiles, with Auto Mart users Are able to post their cars for sale.</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>We Are Also A Safe And Trusted Site Where You Can Post Your Car For Sale Or Buy A Used Or New Car Legitimately.</h2>
                <p className='text-sm lg:text-base'>Buy Your car here without any third party engagement. </p>
                <p className='text-sm lg:text-base'>Auto mart is Legit and we want you to be satisfied, your happiness is our happiness</p>
            </div>
        </div>
    </div>
  )
}

export default OurMission