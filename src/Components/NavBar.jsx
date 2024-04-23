import React from 'react'
import {FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import DarkModeToggle from './DarkMode/DarkModeToggle';




const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-3 py-1 md:px-6 md:py-2 dark:bg-gray-800 dark:text-white shadow-lg backdrop-blur-lg fixed top-0 z-50 w-full text-slate-300 ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {/* Mobile view */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:text-white dark:bg-gray-800">
        <li>< a href='#' className="text-gray-500 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white" >Home</ a></li>
        <li><Link to='about' className="text-gray-500 hover:text-gray-950 950 dark:text-gray-300 dark:hover:text-white" >About</Link></li>
        <li>< Link to= 'skills' className="text-gray-500 hover:text-gray-950 950 dark:text-gray-300 dark:hover:text-white" >Skills</ Link></li>
      </ul>       
    </div>
    
  <div className="flex items-center">
  <div className=" navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
        <li>< a href='#' className="text-gray-400 hover:text-gray-950 dark:hover:text-white" >Home</ a></li>
        <li><Link to='about'smooth={true} className="text-gray-400 hover:text-gray-950 dark:hover:text-white" >About</Link></li>
        <li>< Link to='skills'smooth={true} className="text-gray-400 hover:text-gray-950 dark:hover:text-white" >Skills</ Link></li>
    </ul>
  </div>
  </div>
  <div className="flex items-center space-x-4">
    <a href="https://wa.me/9645790513" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='w-5 h-5 text-green-600'/></a>
    <a href="https://www.linkedin.com/in/vivek-viswanadhan-760783167/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-5 h-5 text-blue-500' /></a>
    <a href="mailto:vivekpp749@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className='w-5 h-5 text-blue-500' /></a>
    <a href="https://github.com/GitNinja749" target="_blank" rel="noopener noreferrer"><FaGithub className='w-5 h-5 text-black dark:text-white' /></a>
    <DarkModeToggle/>
  </div>
</nav>
   
  )
}

export default NavBar