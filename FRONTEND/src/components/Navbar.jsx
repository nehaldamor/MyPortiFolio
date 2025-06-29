import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

// ⬇️  Step-1: import सारी icons
import homeIcon from "../assets/home-line.png";
import userIcon from "../assets/user.png";
import folderIcon from "../assets/folder-image-line.png";
import skillIcon from "../assets/Skill.png";
import eduIcon from "../assets/education.png";
import contactIcon from "../assets/contacts-line.png";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import leetIcon from "../assets/leetcode.svg";
import menuIcon from "../assets/menu-fill.png";
import closeIcon from "../assets/close-circle-fill.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.to(sidebarRef.current, {
      x: isOpen ? 0 : "-100%",
      duration: 0.5,
      ease: isOpen ? "power2.out" : "power2.in",
    });
  }, [isOpen]);

  return (
    <div className="relative">
      {/* sidebar — mobile */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 w-64 h-full bg-black text-white transform -translate-x-full"
      >
       <div className="flex items-center gap-4 mt-5">
  <a
    href="linkedin.com/in/nehal-damor"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="h-8 invert" src={linkedinIcon} alt="LinkedIn" />
  </a>

  <a
    href="https://github.com/nehaldamor"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="h-7 invert" src={githubIcon} alt="GitHub" />
  </a>

 

  <a
    href="https://leetcode.com/u/Nehal_Damor/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="h-8 invert" src={leetIcon} alt="LeetCode" />
  </a>
</div>


          {/* nav links */}
          <div className="mt-10 space-y-6">
            <NavItem to="home" icon={homeIcon} setIsOpen={setIsOpen}>Home</NavItem>
            <NavItem to="about" icon={userIcon} setIsOpen={setIsOpen}>About</NavItem>
            <NavItem to="projects" icon={folderIcon} setIsOpen={setIsOpen}>Projects</NavItem>
            <NavItem to="skills" icon={skillIcon} setIsOpen={setIsOpen}>Skills</NavItem>
            <NavItem to="education" icon={eduIcon} setIsOpen={setIsOpen}>Education</NavItem>
            <NavItem to="contact" icon={contactIcon} setIsOpen={setIsOpen}>Contact</NavItem>
          </div>
        </div>
      </div>

      {/* desktop bar */}
      {/* …same NavItem usage… */}

      {/* menu toggle */}
      <div
        className="fixed top-5 right-5 bg-cyan-300 p-2 rounded-full cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img className="invert w-8" src={isOpen ? closeIcon : menuIcon} alt="toggle" />
      </div>
    </div>
  );
};

// Extracted nav-item component
const NavItem = ({ to, icon, children, setIsOpen }) => (
  <Link
    to={to}
    smooth
    duration={700}
    onClick={() => setIsOpen(false)}
    className="flex items-center gap-2 cursor-pointer"
  >
    <img className="invert h-5" src={icon} alt="" /> {children}
  </Link>
);

export default Navbar;
