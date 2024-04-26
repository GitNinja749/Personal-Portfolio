import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";



const Skills = () => {
  return (
    <div id='skills' className='md:h-screen dark:bg-gray-950 dark:text-white pt-14'>
        <div className='text-center pt-9'>
            <h1 className='text-xl'
            >What I work with</h1>
            <h1 className='text-5xl font-bold text-black mb-9 dark:text-white data-aos="flip-down"'
            >My Skills</h1>
        </div>
       <div className='flex justify-center items-center '>
       <div className='card w-80 mx-3 md:mx-0 md:w-[700px] bg-base-100 shadow-xl mb-5 dark:bg-gray-900 dark:text-white'>
        <div className='grid grid-cols-2 md:grid-cols-3  gap-x-5 gap-y-20 py-9 '>
            <div className='text-center'>
                <h1>HTML</h1>
                <div className='flex justify-center items-center'><FaHtml5 className="w-14 h-14 text-orange-400" /></div>
            </div>
            <div className='text-center'>
                <h1>CSS</h1>
                <div className='flex justify-center items-center'><FaCss3Alt  className="w-14 h-14 text-blue-500" /></div>
            </div>
            <div className='text-center'  >
                <h1>JavaScript</h1>
                <div className='flex justify-center items-center'><TbBrandJavascript className="w-14 h-14 text-yellow-300" /></div>
            </div>
            <div className='text-center'>
                <h1>Bootstrap</h1>
                <div className='flex justify-center items-center'><FaBootstrap className="w-14 h-14 text-blue-800" /></div>
            </div>
            <div className='text-center'>
                <h1>React Js</h1>
                <div className='flex justify-center items-center'><FaReact className="w-14 h-14  text-blue-500" /></div>
            </div>
            <div className='text-center'>
                <h1>Tailwind</h1>
                <div className='flex justify-center items-center' ><SiTailwindcss className="w-14 h-14  text-blue-500" /></div>
            </div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Skills