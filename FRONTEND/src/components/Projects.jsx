import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import smart1 from '../assets/smart1.png';
import smart2 from '../assets/smart2.png'; // Rename this in folder!

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-black text-gray-300 flex flex-col items-center py-5">
      <h1 className="text-4xl font-bold text-white underline mb-6 ">Projects</h1>
      
      {/* Uber Clone */}
      <div className="bg-gray-900 p-9 rounded-lg w-150 md:w-200 lg:w-350 flex flex-col items-center justify-between">
        <h2 className="text-4xl font-semibold text-orange-400">Uber Clone</h2>
        {/* ... description code ... */}
        <div className="flex justify-center gap-4 mt-6 lg:gap-10 lg:h-100">
          <img className="h-40 rounded-lg" src={img1} alt="Screenshot 1" />
          <img className="h-40 rounded-lg" src={img2} alt="Screenshot 2" />
          <img className="h-40 rounded-lg" src={img3} alt="Screenshot 3" />
        </div>
        {/* ... link ... */}
      </div>

      {/* Smart Village Portal */}
      <div className="bg-gray-900 p-9 mt-10 rounded-lg w-150 md:w-200 lg:w-350 flex flex-col items-center justify-between">
        <h2 className="text-4xl font-semibold text-orange-400">Smart Village Portal</h2>
        {/* ... description code ... */}
        <div className="flex justify-center gap-4 mt-6 lg:gap-10 lg:h-100">
          <img className="h-40 rounded-lg" src={smart1} alt="Smart Screenshot 1" />
          <img className="h-40 rounded-lg" src={smart2} alt="Smart Screenshot 2" />
          <img className="h-40 rounded-lg" src={img3} alt="Smart Screenshot 3" />
        </div>
        {/* ... link ... */}
      </div>
    </div>
  );
};

export default Projects;
