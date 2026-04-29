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
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);

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
      // Shrink navbar slightly after scrolling past 20px
      setScrolled(window.scrollY > 20);

      if (isClickScrolling.current) return;

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

  // Close menu on outside click
  const navRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <nav
      ref={navRef}
      className={`bg-white/10 backdrop-blur-sm border border-white/15 w-full max-w-7xl rounded-3xl mx-auto transition-all duration-300
        ${scrolled ? "mt-2 px-3 py-2" : "mt-4 p-4"}
      `}
    >
      <div className="flex items-center justify-between">
        {/* Logo — truncates gracefully on very small screens */}
        <img src="/light.png" alt="Logo" className="h-8 w-auto" />

        {/* Desktop links */}
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

        {/* Mobile right side: active section label + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Shows which section is active so user has context when menu is closed */}
          <span className="text-xs text-white/50 capitalize">
            {links.find((l) => l.id === active)?.label}
          </span>

          <button
            className="flex flex-col gap-1.5 p-2 rounded-xl hover:bg-white/10 transition touch-manipulation"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 mt-3" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-1 border-t border-white/10 pt-3">
          {links.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleClick(id)}
              // Larger touch target (py-3) for easier tapping on mobile
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${active === id
                  ? "text-white bg-white/20"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <span className={`${active === id ? "text-white" : "text-white/50"}`}>
                <Icon />
              </span>
              {label}
              {active === id && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;