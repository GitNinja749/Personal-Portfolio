import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




const Footer = () => {
  return (
    <div className=' text-black dark:text-white p-4 dark:bg-gray-900 bg-base-300'>
      <footer className="footer footer-center md:p-10  text-base-content rounded dark:text-white p-4 dark:bg-gray-900">
        <nav >
          <div className="grid grid-flow-col gap-4">
              <a href="https://github.com/GitNinja749"><FaGithub className='w-9 h-9 hover:text-black dark:hover:text-blue-500'/></a>
              <a href="https://www.linkedin.com/in/vivek-viswanadhan-760783167/" ><FaLinkedin className='w-9 h-9 hover:text-blue-500'/></a>
              <a href="https://www.instagram.com/" ><FaInstagram className='w-9 h-9 hover:text-red-500'/></a>
              <a href="https://wa.me/9645790513" ><FaWhatsapp className='w-9 h-9 hover:text-green-500'/></a>
          </div>
        </nav> 
        <aside>
        <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer