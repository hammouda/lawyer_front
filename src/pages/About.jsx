import React from 'react'
import Menu from '../components/menu'
import Header from '../components/about/header'
import Ceo from '../components/about/ceo'
import Vision from '../components/about/vision'
import Contact from '../components/about/contact'
import Footer from '../components/footer'

function About() {
  return (
    <div>
        <Menu/>
        <Header/>
        <Ceo/>
        <Vision/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default About