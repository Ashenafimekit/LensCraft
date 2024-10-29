import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Tab from '../components/Tab'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#232323]'>
      <Header/>
      <Hero/>
      <Tab/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home