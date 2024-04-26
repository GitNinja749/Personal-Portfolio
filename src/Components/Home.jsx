import React from 'react'
import NavBar from './NavBar'
import Photos from '../assets/Images/Img1.jpg'



const Home = () => {
  return (  
      <div className='dark:text-white dark:bg-gray-950 pt-12'>
        {/* NavBar */}
        <NavBar/>
       <div className="hero min-h-screen bg-base-200 dark:text-white dark:bg-gray-950">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Photos} alt=""  className=' w-60 h-60 md:w-[400px] md:h-[400px] rounded-lg max-w-sm  shadow-2xl brightness-90 dark:brightness-75'/>
          <div>
            <h1 className='text-lg md:text-xl animate-bounce'>Hi</h1>
            <h1 className='text-lg md:text-xl'>there, I’m </h1>
            <h1 className="text-2xl md:text-5xl font-bold"><span  className='hover:text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-300 bg-clip-text'>
               Vivek</span> a <span  className='text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-300 bg-clip-text'>
               Web Developer</span> </h1>
            <p className="py-3 md:py-6">I am highly skilled MERN stack developer.Committed to delivering high-quality code and ensuring optimal performance. Seeking a challenging position where I can utilize my skills and contribute to the success of a dynamic organization.</p>
            <button className="btn btn-primary ">Download CV</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home