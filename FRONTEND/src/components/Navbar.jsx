import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

/* ——— icons ——— */
import homeIcon     from "/src/assets/home-line.png";
import userIcon     from "/src/assets/user.png";
import folderIcon   from "/src/assets/folder-image-line.png";
import skillIcon    from "/src/assets/Skill.png";
import eduIcon      from "/src/assets/education.png";
import contactIcon  from "/src/assets/contacts-line.png";
import linkedinIcon from "/src/assets/linkedin.svg";
import githubIcon   from "/src/assets/github.svg";
import leetIcon     from "/src/assets/leetcode.svg";
import menuIcon     from "/src/assets/menu-fill.png";
import closeIcon    from "/src/assets/close-circle-fill.png";

const navLinks = [
  { to: "home",     label: "Home",     icon: homeIcon    },
  { to: "about",    label: "About",    icon: userIcon    },
  { to: "projects", label: "Projects", icon: folderIcon  },
  { to: "skills",   label: "Skills",   icon: skillIcon   },
  { to: "education",label: "Education",icon: eduIcon     },
  { to: "contact",  label: "Contact",  icon: contactIcon },
];

const socialLinks = [
  { href: "https://linkedin.com/in/nehal-damor", icon: linkedinIcon, alt: "LinkedIn"},
  { href: "https://github.com/nehaldamor",        icon: githubIcon,  alt: "GitHub"},
  { href: "https://leetcode.com/u/Nehal_Damor/",  icon: leetIcon,    alt: "LeetCode"},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  /* mobile sidebar animation */
  useEffect(() => {
    gsap.to(sidebarRef.current, {
      x: isOpen ? 0 : "-100%",
      duration: 0.5,
      ease: isOpen ? "power2.out" : "power2.in",
    });
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* ─────────── Desktop navbar (lg↑) ─────────── */}
      <header className="hidden lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:flex
                         lg:items-center lg:justify-between
                         bg-black/90 backdrop-blur text-white
                         px-12 py-4">
        {/* logo / name */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          <img src={homeIcon} alt="Logo" className="h-6 invert" />
          Nehal Damor
        </div>

        {/* center links */}
        <nav className="flex gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={700}
              className="cursor-pointer hover:text-cyan-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* socials right */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={alt} className="h-6 invert hover:scale-110 transition" />
            </a>
          ))}
        </div>
      </header>

      {/* ─────────── Mobile sidebar (<lg) ─────────── */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 left-0 w-64 h-full bg-black text-white
                   -translate-x-full lg:hidden"
      >
        {/* socials (mobile) */}
        <div className="flex items-center justify-around gap-4 mt-6">
          {socialLinks.map(({ href, icon, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className="h-8 invert" src={icon} alt={alt} />
            </a>
          ))}
        </div>

        {/* nav links (mobile) */}
        <nav className="mt-10 ml-6 space-y-6">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={700}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img className="invert h-5" src={icon} alt="" /> {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* hamburger / close (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 bg-cyan-300 p-2 rounded-full lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <img
          className="invert w-8"
          src={isOpen ? closeIcon : menuIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </button>
    </div>
  );
};

export default Navbar;
