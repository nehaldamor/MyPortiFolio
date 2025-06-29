import React from 'react';

import htmlLogo     from '../assets/html5-fill.png';
import cssLogo      from '../assets/css3-line.png';
import tailwindLogo from '../assets/Tailwindcss.webp';
import jsLogo       from '../assets/javascript-line.png';
import reactLogo    from '../assets/reactjs-line.png';
import javaLogo     from '../assets/java-line.png';
import sqlLogo      from '../assets/sql.webp';
import dsaLogo      from '../assets/DSA.webp';

// ⚠️  OLD string-paths hata diye, har skill ko imported logo diya
const skills = [
  { name: 'HTML',         logo: htmlLogo,     per: '80%' },
  { name: 'CSS',          logo: cssLogo,      per: '70%' },
  { name: 'Tailwind CSS', logo: tailwindLogo, per: '70%' },
  { name: 'JAVASCRIPT',   logo: jsLogo,       per: '70%' },
  { name: 'REACTJS',      logo: reactLogo,    per: '80%' },
  { name: 'JAVA',         logo: javaLogo,     per: '70%' },
  { name: 'SQL',          logo: sqlLogo,      per: '60%' },
  { name: 'DSA',          logo: dsaLogo,      per: '70%' },
  { name: 'MERN Stack',   logo: htmlLogo,     per: '80%' }
];

const Skills = () => (
  <div id="skills" className="h-full">
    <div className="flex h-full flex-col bg-black text-white">
      <h1 className="mt-0 mb-3 text-4xl font-semibold text-center">Skills</h1>

      <div className="flex flex-col items-center">
        {skills.map(({ name, logo, per }, idx) => (
          <div key={idx} className="mt-2 rounded-lg bg-gray-700 p-4 w-full max-w-md">
            <div className="flex flex-col items-center rounded-lg bg-orange-400 p-4 lg:p-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">{name}</h2>
                <img src={logo} alt={name} className="h-8 w-8" />
              </div>

              <div className="mt-2 flex w-full items-center gap-2">
                <div className="h-2 w-full rounded-lg bg-red-400">
                  <div className="h-2 rounded-lg bg-red-700" style={{ width: per }} />
                </div>
                <span className="text-base font-semibold">{per}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 h-[2px] bg-gray-700" />
    </div>
  </div>
);

export default Skills;
