import React from 'react'
import Header from '../components/home/header'
import About from '../components/home/about'
import Services from '../components/home/services'
import Team from '../components/home/team'
import Cases from '../components/home/cases'
import Contact from '../components/home/contact'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
        <Team/>
        <Cases/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default Home