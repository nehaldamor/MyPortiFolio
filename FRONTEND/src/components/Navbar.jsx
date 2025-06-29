import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

/* ---------- सभी आइकन एक-एक करके इम्पोर्ट ---------- */
import linkedinIcon   from "../assets/linkedin.svg";
import githubIcon     from "../assets/github.png";
import leetcodeIcon   from "../assets/leetcode.svg";
import homeIcon       from "../assets/home-line.png";
import userIcon       from "../assets/user.png";
import folderIcon     from "../assets/folder-image-line.png";
import skillIcon      from "../assets/Skill.png";
import eduIcon        from "../assets/education.png";
import contactIcon    from "../assets/contacts-line.png";
import closeIcon      from "../assets/close-circle-fill.png";
import menuIcon       from "../assets/menu-fill.png";
/* ---------------------------------------------------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  /* GSAP slide-in / slide-out  */
  useEffect(() => {
    gsap.to(sidebarRef.current, {
      x: isOpen ? 0 : "-100%",
      duration: 0.5,
      ease: isOpen ? "power2.out" : "power2.in",
    });
  }, [isOpen]);

  /* एक छोटा helper ताकि बार-बार code repeat न हो */
  const NavLink = ({ to, icon, label }) => (
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

  return (
    <div className="relative">
      {/* ===== Sidebar (mobile) ===== */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full w-64 -translate-x-full transform bg-black text-white lg:hidden"
      >
        <div className="flex flex-col items-center mt-10">
          {/* Social icons */}
          <div className="flex items-center justify-around gap-4 mt-5">
            <img className="h-8 invert" src={linkedinIcon}  alt="LinkedIn" />
            <img className="h-7 invert" src={githubIcon}    alt="GitHub"   />
            <img className="h-7 invert" src={githubIcon}    alt="GitHub"   />
            <img className="h-8 invert" src={leetcodeIcon}  alt="LeetCode" />
          </div>

          {/* Nav links */}
          <nav className="mt-10 space-y-6">
            <NavLink to="home"      icon={homeIcon}    label="Home"      />
            <NavLink to="about"     icon={userIcon}    label="About"     />
            <NavLink to="projects"  icon={folderIcon}  label="Projects"  />
            <NavLink to="skills"    icon={skillIcon}   label="Skills"    />
            <NavLink to="education" icon={eduIcon}     label="Education" />
            <NavLink to="contact"   icon={contactIcon} label="Contact"   />
          </nav>
        </div>
      </aside>

      {/* ===== Top navbar (desktop) ===== */}
      <header className="fixed top-0 left-0 hidden h-20 w-full bg-black text-white lg:flex lg:items-center lg:justify-center">
        <nav className="flex gap-10">
          <NavLink to="home"      icon={homeIcon}    label="Home"      />
          <NavLink to="about"     icon={userIcon}    label="About"     />
          <NavLink to="projects"  icon={folderIcon}  label="Projects"  />
          <NavLink to="skills"    icon={skillIcon}   label="Skills"    />
          <NavLink to="education" icon={eduIcon}     label="Education" />
          <NavLink to="contact"   icon={contactIcon} label="Contact"   />
        </nav>
      </header>

      {/* ===== Hamburger / Close button ===== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 rounded-full bg-cyan-300 p-2 lg:hidden"
      >
        <img className="invert w-8" src={isOpen ? closeIcon : menuIcon} alt="Menu" />
      </button>
    </div>
  );
};

export default Navbar;
