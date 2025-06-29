import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

// ⬇️  इमेजें इम्पोर्ट करें
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon  from "../assets/github.png";
import leetcodeIcon from "../assets/leetcode.svg";
import homeIcon   from "../assets/home-line.png";
import userIcon   from "../assets/user.png";
import folderIcon from "../assets/folder-image-line.png";
import skillIcon  from "../assets/Skill.png";
import eduIcon    from "../assets/education.png";
import contactIcon from "../assets/contacts-line.png";
import closeIcon  from "../assets/close-circle-fill.png";
import menuIcon   from "../assets/menu-fill.png";

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
      {/* --- Sidebar --- */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 w-64 h-full bg-black text-white transform -translate-x-full"
      >
        <div className="flex flex-col items-center mt-10">
          {/* Social links */}
          <div className="flex items-center justify-around gap-4 mt-5">
            <img className="h-8 invert" src={linkedinIcon}  alt="LinkedIn" />
            <img className="h-7 invert" src={githubIcon}    alt="GitHub"   />
            <img className="h-7 invert" src={githubIcon}    alt="GitHub"   />
            <img className="h-8 invert" src={leetcodeIcon}  alt="LeetCode" />
          </div>

          {/* Nav links */}
          <div className="mt-10 space-y-6">
            <NavLink to="home"      icon={homeIcon}    setIsOpen={setIsOpen} label="Home" />
            <NavLink to="about"     icon={userIcon}    setIsOpen={setIsOpen} label="About" />
            <NavLink to="projects"  icon={folderIcon}  setIsOpen={setIsOpen} label="Projects" />
            <NavLink to="skills"    icon={skillIcon}   setIsOpen={setIsOpen} label="Skills" />
            <NavLink to="education" icon={eduIcon}     setIsOpen={setIsOpen} label="Education" />
            <NavLink to="contact"   icon={contactIcon} setIsOpen={setIsOpen} label="Contact" />
          </div>
        </div>
      </div>

      {/* --- Top navbar for lg+ --- */}
      <div className="fixed top-0 left-0 w-full h-20 bg-black text-white hidden lg:block">
        <div className="flex items-center justify-center gap-10 mt-6">
          <NavLink to="home"      icon={homeIcon}    setIsOpen={setIsOpen} label="Home" />
          <NavLink to="about"     icon={userIcon}    setIsOpen={setIsOpen} label="About" />
          <NavLink to="projects"  icon={folderIcon}  setIsOpen={setIsOpen} label="Projects" />
          <NavLink to="skills"    icon={skillIcon}   setIsOpen={setIsOpen} label="Skills" />
          <NavLink to="education" icon={eduIcon}     setIsOpen={setIsOpen} label="Education" />
          <NavLink to="contact"   icon={contactIcon} setIsOpen={setIsOpen} label="Contact" />
        </div>
      </div>

      {/* --- Hamburger / Close --- */}
      <div
        className="fixed top-5 right-5 bg-cyan-300 p-2 rounded-full cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img className="invert w-8" src={isOpen ? closeIcon : menuIcon} alt="Menu" />
      </div>
    </div>
  );
};

/* Extracted small helper so markup stays DRY */
const NavLink = ({ to, icon, label, setIsOpen }) => (
  <Link
    to={to}
    smooth
    duration={700}
    onClick={() => setIsOpen(false)}
    className="flex items-center gap-2 cursor-pointer"
  >
    <img className="invert h-5" src={icon} alt="" /> {label}
  </Link>
);

export default Navbar;
