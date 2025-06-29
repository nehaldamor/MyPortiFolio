import React from 'react';
import bgImg from '../assets/bg.webp';   // ⬅️  relative path adjust करें

const Home = () => (
  <section id="home">
    <div
      className="h-screen bg-cover text-white"
      style={{ backgroundImage: `url(${bgImg})` }}   // ⬅️  Vite hashed URL
    >
      <div className="flex items-center justify-center">
        <div className="mt-45 mr-20 md:mr-80 lg:ml-200">
          <h2 className="text-3xl md:text-4xl font-serif">Nehal Damor</h2>

          <h3 className="mt-10 w-60 text-2xl font-bold text-emerald-400 md:w-70">
            I'm <span className="text-cyan-400">Nehal Damor</span>, a passionate&nbsp;
            <span className="text-cyan-400">Software Developer</span> dedicated to building
            innovative and user-friendly applications.
          </h3>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
