import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'

const MainPage = () => {

  return (
    <div className='bg-base-200' >
        <Home />
        <About/>
        <Skills/>
        <Footer/> 
        
    </div>

  )
}

export default MainPage