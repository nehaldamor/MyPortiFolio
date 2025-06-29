import React from 'react';
import myImage from '../assets/im.jpg'; // ✅ Import image properly

const About = () => {
  return (
    <section id='about'>
      <div className='h-full bg-black flex flex-col items-center'>

        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='text-3xl underline mb-4 text-white font-semibold mt-4'>About</h1>

          <div className='flex flex-col items-center bg-gray-900 w-150 md:w-200 lg:w-350 p-1 rounded-lg lg:p-10'>
            <div className='flex flex-col items-center justify-center p-4 w-80 lg:w-full'>

              <p className='text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl'>
                I am Nehal Damor, a passionate software developer with expertise in building scalable and efficient web applications. With a strong foundation in full-stack development, I enjoy solving real-world problems through clean and optimized code. My goal is to continuously learn and contribute to innovative projects that make a meaningful impact.
              </p>

              <div className='mt-7 flex flex-col items-center justify-center w-130 sm:w-130 lg:w-full'>
                <img className='rounded-lg h-130 w-100' src={myImage} alt="Nehal Damor" />
                <h2 className='text-xl text-white font-serif w-80 md:w-full sm:w-130 mt-4 text-justify md:text-3xl'>
                  I am currently pursuing a Bachelor's degree in Computer Science and Engineering. My coursework includes programming, data structures, and web development. I am eager to apply my skills to real-world projects.
                </h2>
              </div>

            </div>
          </div>
        </div>

        <div className='mt-5 h-[2px] bg-gray-700'></div>
      </div>
    </section>
  );
};

export default About;
