import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Reservation from './Reservation.jsx'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'


function App() {


  return (
    <>
      <Nav/>
      {/* <Hero/> */}
      <About/>
      <Reservation/>
      <Testimonial/>
      <Contact/>
      <Footer/>


    </>
  )
}

export default App
