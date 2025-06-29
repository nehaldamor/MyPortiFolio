import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(sidebarRef.current, { x: "-100%", duration: 0.5, ease: "power2.in" });
    }
  }, [isOpen]);
  return (
    <div className="relative ">
      
      <div
        ref={sidebarRef}
        
        className="fixed top-0 left-0 w-64 h-full  bg-black text-white   transform -translate-x-full  "
      >
        <div className="flex flex-col items-center mt-10">
          <div>
            
            {/* <h2 className="text-white text-xl font-semibold">Nehal Damor</h2> */}
          </div>
          <div className="flex items-center justify-around gap-4 mt-5">
            <img className="h-8 rounded-full invert" src="/src/assets/linkedin.svg" alt="" />
            <img className="h-7 rounded-md invert" src="/src/assets/github.png" alt="" />
            <img className="h-7 rounded-md invert" src="/src/assets/github.png" alt="" />
            <img className="h-8 rounded-full invert" src="/src/assets/leetcode.svg" alt="" />
          </div>
          <div className="mt-10 mr-30 space-y-6">
            <Link to="home" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1" src="/src/assets/home-line.png" alt="" /> Home
            </Link>
            <Link to="about" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1 h-6" src="/src/assets/user.png" alt="" /> About
            </Link>
            <Link to="projects" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert" src="/src/assets/folder-image-line.png" alt="" /> Projects
            </Link>
            <Link to="skills" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1 h-6" src="/src/assets/Skill.png" alt="" /> Skills
            </Link>
            <Link to="education" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1 h-5" src="/src/assets/education.png" alt="" /> Education
            </Link>
            <Link to="contact" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1" src="/src/assets/contacts-line.png" alt="" /> Contact
            </Link>
          </div>
        </div>
      </div>
      <div
        className="fixed  top-0 left-0 w-full h-20  bg-black text-white hidden  lg:block "
      >
        <div className="flex items-center justify-between">
          <div>
           
          </div>
          {/* <div className="flex items-center justify-around gap-4 mt-5">
            <img className="h-8 rounded-full" src="/src/assets/linkedin.png" alt="" />
            <img className="h-8 rounded-full" src="/src/assets/github.png" alt="" />
            <img className="h-8 rounded-full" src="/src/assets/github.png" alt="" />
            <img className="h-8 rounded-full" src="/src/assets/leetcode.png" alt="" />
          </div> */}
          <div className=" flex items-center justify-center gap-10 mt-6  mr-30 space-y-6">
            <Link to="home" smooth={true} onClick={()=>{setIsOpen(false)}} duration={700} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1" src="/src/assets/home-line.png" alt="" /> Home
            </Link>
            <Link to="about" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}}  className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1 h-6" src="/src/assets/user.png" alt="" /> About
            </Link>
            <Link to="projects" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert" src="/src/assets/folder-image-line.png" alt="" /> Projects
            </Link>
            <Link to="skills" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert mb-1 h-6" src="/src/assets/Skill.png" alt="" /> Skills
            </Link>
            <Link to="education" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className="flex items-center gap-2 cursor-pointer">
              <img className="invert  h-5" src="/src/assets/education.png" alt="" /> Education
            </Link>
            <Link to="contact" smooth={true} duration={700} onClick={()=>{setIsOpen(false)}} className=" mb-5 flex items-center gap-2 cursor-pointer">
              <img className="invert" src="/src/assets/contacts-line.png" alt="" /> Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Icon - Always Right Side */}
      <div className="fixed top-5 right-5 bg-cyan-300 p-2 rounded-full cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img className="invert w-8" src="/src/assets/close-circle-fill.png" alt="Close" />
        ) : (
          <img className="invert w-8" src="/src/assets/menu-fill.png" alt="Menu" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
