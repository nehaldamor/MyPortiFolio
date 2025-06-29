import React from 'react';

const Education = () => {
  return (
    <div id='education' className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Indrashil University</h2>
          <h3 className="text-lg mt-2">
            Computer Science And Engineering <span className="text-orange-400">2022 - 2026</span>
          </h3>
          <p className="mt-2 text-gray-300">Pursuing a Bachelor's degree in Computer Science and Engineering with a focus on full-stack development and software engineering.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Ekalavya Model Residential School Waghodiya-2</h2>
          <h3 className="text-lg mt-2">
            School <span className="text-orange-400">2016 - 2022</span>
          </h3>
          <p className="mt-2 text-gray-300">Completed high school education with a strong foundation in mathematics and science.</p>
        </div>
        <div className='h-[1.5] bg-gray-700'></div>
      </div>
     
    </div>
  );
};

export default Education;
