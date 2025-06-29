import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import smart1 from '../assets/smart1.png';
import smart2 from '../assets/smart2.png'; // Make sure to rename in folder too

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-black text-gray-300 flex flex-col items-center py-5">
      <h1 className="text-4xl font-bold text-white underline mb-6">Projects</h1>
      
      {/* ========== Uber Clone ========== */}
      <div className="bg-gray-900 p-9 rounded-lg w-150 md:w-200 lg:w-350 flex flex-col items-center justify-between">
        <h2 className="text-4xl font-semibold text-orange-400 lg:text-4xl">Uber Clone</h2>
        <h3 className="text-3xl font-semibold mt-4 lg:text-3xl">Project Description:</h3>
        <p className="text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl mt-4">
          Developed a ride-hailing web application using the MERN stack, allowing users to book rides, view driver details, and track their location in real time. Integrated Google Maps for route optimization and ensured a seamless user experience with an intuitive interface.
        </p>
        <h3 className="text-2xl mt-3 text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl">Technology Used:</h3>
        <p className="text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl">
          <strong>Frontend:</strong> <span className="text-blue-400">React.js, GSAP, JavaScript</span>
        </p>
        <p className="text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl">
          <strong>Backend:</strong> <span className="text-green-400">Express.js, Mongoose, MongoDB, Node.js</span>
        </p>
        <div className="flex justify-center gap-4 mt-6 lg:gap-10 lg:h-100">
          <img className="h-40 lg:h-90 md:h-60 md:w-40 lg:w-70 w-26 rounded-lg shadow-lg" src={img1} alt="Project Screenshot 1" />
          <img className="h-40 lg:h-90 md:h-60 md:w-40 lg:w-70 w-26 rounded-lg shadow-lg" src={img2} alt="Project Screenshot 2" />
          <img className="h-40 lg:h-90 md:h-60 md:w-40 lg:w-70 w-26 rounded-lg shadow-lg" src={img3} alt="Project Screenshot 3" />
        </div>
        <div className="mt-6 text-center">
          <span className="text-xl text-orange-400 font-semibold">Live: </span>
          <a
            href="https://uber-frontend-ejk3.onrender.com"
            className="text-blue-400 hover:text-blue-300 transition duration-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://uber-frontend-ejk3.onrender.com
          </a>
        </div>
      </div>

      {/* ========== Smart Village Portal ========== */}
      <div className="bg-gray-900 p-9 mt-10 rounded-lg w-150 md:w-200 lg:w-350 flex flex-col items-center justify-between">
        <h2 className="text-4xl font-semibold text-orange-400 lg:text-4xl">Smart Village Portal</h2>
        <h3 className="text-3xl font-semibold mt-4 lg:text-3xl">Project Description:</h3>
        <p className="text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl mt-4">
          Village Management System is a web-based application designed to digitally bridge the gap between village administration and villagers. It provides a centralized platform for administrators to post government schemes, public notices, and village updates, while villagers can stay informed and raise complaints with ease.
        </p>
        <h3 className="text-2xl mt-3 text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl">Technology Used:</h3>
        <p className="text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl">
          <strong>Frontend:</strong> <span className="text-blue-400">React.js, GSAP, JavaScript, Tailwind CSS</span>
        </p>
        <p className="text-xl text-white font-serif w-90 sm:w-130 text-justify lg:w-full md:text-3xl">
          <strong>Backend:</strong> <span className="text-green-400">Express.js, Mongoose, MongoDB, Node.js</span>
        </p>
        <div className="flex justify-center gap-4 mt-6 lg:gap-10 lg:h-100">
          <img className="h-40 lg:h-90 md:h-60 md:w-40 lg:w-70 w-26 rounded-lg shadow-lg" src={smart1} alt="Smart Project Screenshot 1" />
          <img className="h-40 lg:h-90 md:h-60 md:w-40 lg:w-70 w-26 rounded-lg shadow-lg" src={smart2} alt="Smart Project Screenshot 2" />
          <img className="h-40 lg:h-90 md:h-60 md:w-40 lg:w-70 w-26 rounded-lg shadow-lg" src={img3} alt="Smart Project Screenshot 3" />
        </div>
        <div className="mt-6 text-center">
          <span className="text-xl text-orange-400 font-semibold">Live: </span>
          <a
            href="https://smart-village-portal-1.onrender.com/"
            className="text-blue-400 hover:text-blue-300 transition duration-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://smart-village-portal-1.onrender.com/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
