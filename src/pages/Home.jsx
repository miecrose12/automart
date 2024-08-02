import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import Featured from '../components/Home/Featured/Featured'
import OurMission from '../components/Home/Mission/OurMission'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Featured/>
     <OurMission/>
     <Footer/>
    </>
  )
}

export default Home