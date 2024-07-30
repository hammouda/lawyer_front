import React from 'react'
import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Team from '../components/team'

function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
        <Team/>
    </div>
  )
}

export default Home