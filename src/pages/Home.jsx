import React from 'react'
import Hero from '../components/Sections/Hero'
import AboutUs from '../components/Sections/AboutUs'
import Services from '../components/Sections/Services'
import Blog from '../components/Sections/Blog'
import Clients from '../components/Sections/Clients'

const Home = () => {
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Clients/>
      <Blog/>
    </main>
  )
}

export default Home