import React from 'react'

const Home = () => {
  return (
    <section id='home'>
    <div className='h-screen bg-cover text-white bg-[url(./src/assets/bg.webp)]'>
      <div className='flex items-center justify-center '>
        <div className=' mt-45 mr-20 md:mr-80 lg:ml-200'>
        <h2 className='text-3xl md:text-4xl font-serif '>Nehal damor </h2>
        <h3 className='w-60 mt-10 font-bold text-2xl md:w-70 text-emerald-400'>I'm <span className='text-cyan-400'>Nehal Damor</span>, a passionate <span className='text-cyan-400'>Software Developer</span> dedicated to building innovative and user-friendly applications.</h3>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Home
