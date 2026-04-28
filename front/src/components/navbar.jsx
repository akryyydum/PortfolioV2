import { useState, useEffect, useRef } from "react";

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const AboutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const EducationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const ExperienceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);
const ProjectsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const ContactIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const isClickScrolling = useRef(false); // 👈 lock flag

  const links = [
    { id: "home",       label: "Home",        Icon: HomeIcon },
    { id: "about",      label: "About",       Icon: AboutIcon },
    { id: "education",  label: "Education",   Icon: EducationIcon },
    { id: "experience", label: "Experiences", Icon: ExperienceIcon },
    { id: "projects",   label: "Projects",    Icon: ProjectsIcon },
    { id: "contact",    label: "Contact",     Icon: ContactIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return; // 👈 ignore scroll during lock

      const scrollPos = window.scrollY + 100;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    isClickScrolling.current = true; // 👈 engage lock
    setTimeout(() => {
      isClickScrolling.current = false; // 👈 release after scroll settles
    }, 800);
  };

  return (
    <nav className="bg-white/10 backdrop-blur-sm border border-white/15 p-4 w-full max-w-7xl rounded-3xl mt-4 mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-white text-lg font-bold">Lance's Portfolio</div>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleClick(id)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200
                ${active === id
                  ? "text-white bg-white/20 shadow-inner"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <Icon />
              {label}
              {active === id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1 h-1 rounded-full bg-white/80" />
              )}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-white/10 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 mt-3" : "max-h-0"}`}>
        <div className="flex flex-col gap-1 border-t border-white/10 pt-3">
          {links.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleClick(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${active === id
                  ? "text-white bg-white/20"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;