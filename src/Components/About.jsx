import React from 'react'

const About = () => {
  return (
    <div id='about' className=' md:h-screen grid-cols-1 text-black pt-20 dark:bg-gray-950 dark:text-white'>
            <div>
            <div >
            <h1 className=' font-semibold text-lg text-center' 
                  data-aos="fade-right"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">Who i am</h1>
            <h1 className='text-center font-semibold text-3xl md:text-5xl md:font-bold pb-5'
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            >About Me</h1>
            </div>
            <div className=' flex justify-center items-center'>
            <p className='text-xl w-[300px] md:w-[400px] lg:w-[900px] leading-loose'>
              My journey began with online tutorials and courses, laying the foundation for my skills. 
              Passion drove me to pursue programming, and through hands-on projects, I mastered web 
              development. Problem-solving is my favorite part; there's nothing quite like the thrill of 
              cracking a tough puzzle. I'm constantly hungry to learn new technologies, always pushing 
              myself to grow. My portfolio reflects this journey, showcasing my expertise and creativity. 
              Now, I'm on the lookout for a full-time role in frontend web development where I can bring my 
              enthusiasm and skills to the table, contributing to innovative projects and dynamic teams.
            </p>
            </div>
            </div>

    </div>
  )
}

export default About