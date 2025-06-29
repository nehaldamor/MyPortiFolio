import React from 'react';

const skills = [
  { name: "HTML", logo: "./src/assets/html5-fill.png", per: "80%" },
  { name: "CSS", logo: "./src/assets/css3-line.png", per: "70%" },
  {name : "Tailwind CSS",logo : "./src/assets/Tailwindcss.webp",per : "70%"},
  { name: "JAVASCRIPT", logo: "/src/assets/javascript-line.png", per: "70%" },
  { name: "REACTJS", logo: "/src/assets/reactjs-line.png", per: "80%" },
  { name: "JAVA", logo: "/src/assets/java-line.png", per: "70%" },
  {name : "SQL",logo : "/src/assets/sql.webp",per : "60%"},
  { name: "DSA", logo: "/src/assets/DSA.webp", per: "70%" },
  { name: "MERN Stack", logo: "/src/assets/html5-fill.png", per: "80%" }
  
];

const Skills = () => {
  return (
    <div className='h-full' id='skills'>
      <div className='flex h-full flex-col bg-black text-white'>
        <div className='flex items-center justify-center mt-0 text-4xl font-semibold mb-3'>
          <h1 className='text-white'>Skills</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>

          {skills.map((skill, index) => (
            <div className='bg-gray-700 p-4 rounded-lg mt-2' key={index}>
              <div  className='w-75 md:w-150 lg:w-220 bg-orange-400 rounded-lg lg:p-6 p-4 flex flex-col items-center justify-center'>
              <div className='flex items-center justify-center gap-3'>
                <h1 className='text-xl font-semibold'>{skill.name}</h1>
                <img className='w-8 h-8' src={skill.logo} alt={skill.name} />
              </div>
              <div className='flex gap-2 items-center w-full'>
                <div className='bg-red-400 h-2 w-full rounded-lg mt-2'>
                  <div className='h-2 bg-red-700 rounded-lg' style={{ width: skill.per }}></div>
                </div>
                <h3 className='text-base font-semibold'>{skill.per}</h3>
              </div>
            </div>
            </div>
          ))}

        </div>
        <div className='mt-5 h-[2px] bg-gray-700'></div>
      </div>
     
    </div>
  );
}

export default Skills;
