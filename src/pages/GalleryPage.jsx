import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Tab from '../components/Tab'

const galleryPage = () => {
  return (
    <div  className='bg-[#232323]'>
      <Header/>
      <Hero/>
      <Tab/>
      <Footer/>
    </div>
  )
}

export default galleryPage