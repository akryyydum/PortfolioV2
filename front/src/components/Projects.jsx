import { useState, useEffect } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

/* ─────────────────────────────────────────────
   Shared helpers
───────────────────────────────────────────── */
const GlassCard = ({ gradient, label, icon }) => (
  <div
    style={{
      background: gradient,
      boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
    }}
    className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl"
  >
    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl" />
    <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-white/40 to-transparent" />
    <div className="absolute top-0 left-0 h-1/2 w-px bg-gradient-to-b from-white/40 to-transparent" />
    <span className="relative text-4xl">{icon}</span>
    <span className="relative text-sm font-semibold tracking-widest uppercase text-white/80 font-mono">
      {label}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const posterData = [
  { id: 1, title: "Curry Poster", category: "Personal Project", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", accent: "rgba(99,102,241,0.9)", src: "https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398790/CURRY_ifwh5n.png" },
  { id: 2, title: "Lisa Poster", category: "Commission", gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 50%, #2d1b69 100%)", accent: "rgba(139,92,246,0.9)", src: "https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398787/LISA_POSTER_uksnsi.png" },
  { id: 3, title: "Go Youn-Jung Poster", category: "Commission", gradient: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0f3d5c 100%)", accent: "rgba(6,182,212,0.9)", src: "https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398785/goy_xphlf5.png" },
  { id: 4, title: "Evangelion Poster", category: "Personal Project", gradient: "linear-gradient(135deg, #1a0a14 0%, #2d1022 50%, #4a1535 100%)", accent: "rgba(236,72,153,0.9)", src: "https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398783/eva_t8ltb6.png" },
  { id: 5, title: "LeBron X Jordan", category: "Personal Project", gradient: "linear-gradient(135deg, #0a1a0a 0%, #0d2b0d 50%, #0f4a1a 100%)", accent: "rgba(16,185,129,0.9)", src: "https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398783/Untitled-3_2x_dftkjg.png" },
  { id: 6, title: "New Jeans Poster", category: "Commission", gradient: "linear-gradient(135deg, #1a1000 0%, #2b1d00 50%, #4a3200 100%)", accent: "rgba(245,158,11,0.9)", src: "https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398783/NWJNS_gdaq6f.png" },
];

const devData = [
  {
    id: 1,
    title: "TransparaBrgy",
    subtitle: "Blockchain-based Transparent Barangay Management System",
    description:
      "A civic-tech solution built for La Torre North — enabling real-time document tracking, tamper-proof records, and community transparency through distributed ledger technology. Every transaction leaves an immutable trail.",
    longDescription:
      "TransparaBrgy modernizes local government unit (LGU) operations by leveraging blockchain to ensure all barangay transactions are publicly verifiable and tamper-proof. Citizens can track document requests in real-time, officials can manage budgets transparently, and every action is permanently recorded on-chain.",
    stack: ["React.js", "Express", "MongoDB", "Hyperledger Fabric", "MUI", "Node.js", "MongoDB"],
    role: "Full-Stack Developer & Blockchain Engineer",
    status: "Completed",
    year: "2026",
    url: null,
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.6) 0%, rgba(16,185,129,0.5) 100%)",
    accent: "rgba(99,102,241,1)",
    accentHex: "#6366f1",
    label: "Blockchain",
    icon: "⛓",
  },
  {
    id: 2,
    title: "NBS Replica",
    subtitle: "E-commerce Platform with Real-time Inventory Sync",
    description:
      "A full-stack e-commerce replica with live inventory management, cart persistence, and payment flow — mirroring a real-world retail platform at scale.",
    longDescription:
      "A pixel-faithful replica of the National Book Store e-commerce experience, rebuilt from the ground up with a modern stack. Features include live inventory sync via WebSockets, persistent cart sessions, Stripe-based payment simulation, and an admin dashboard for stock management.",
    stack: ["React.js", "Express", "MongoDB", "antd", "Node.js", "MongoDB"],
    role: "Full-Stack Developer",
    status: "Completed",
    year: "2025",
    url: null,
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.6) 0%, rgba(139,92,246,0.5) 100%)",
    accent: "rgba(6,182,212,1)",
    accentHex: "#06b6d4",
    label: "E-Commerce",
    icon: "🛒",
  },
  {
    id: 3,
    title: "PhilAI",
    subtitle: "AI-Powered Filipino Chatbot for Philippine Law",
    description:
      "An AI assistant fine-tuned on Philippine legal texts, designed to provide accessible explanations of laws and regulations in Filipino.",
    longDescription:
      "PhilAI bridges the gap between complex Philippine legal language and everyday Filipinos. The chatbot is fine-tuned on the Revised Penal Code, Labor Code, Family Code, and other key statutes — responding in natural Filipino (Tagalog). It includes citation tracking so users can verify the exact law being referenced.",
    stack: ["React.js", "Express", "MongoDB", "Gemini API", "TailwindCSS", "Node.js", "MongoDB"],
    role: "AI & Frontend Developer",
    status: "In Progress",
    year: "2026",
    url: null,
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.6) 0%, rgba(99,102,241,0.5) 100%)",
    accent: "rgba(236,72,153,1)",
    accentHex: "#ec4899",
    label: "AI/ML",
    icon: "✦",
  },
  {
    id: 4,
    title: "AetherTech",
    subtitle: "A tech e-commerce website",
    description:
      "An e-commerce website built with microservices architecture to demonstrate distributed systems patterns.",
    longDescription:
      "AetherTech is a comprehensive e-commerce platform built to explore microservices architecture within the MERN Stack. The project integrates Docker for containerization and RabbitMQ for asynchronous message passing between services, showcasing real-world patterns for scalable backend systems.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Docker", "RabbitMQ", "Microservices"],
    role: "Back-End Developer",
    status: "Completed",
    year: "2025",
    url: null,
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.6) 0%, rgba(249,115,22,0.5) 100%)",
    accent: "rgba(245,158,11,1)",
    accentHex: "#f59e0b",
    label: "E-Commerce",
    icon: "💻",
  },
  
];

/* ─────────────────────────────────────────────
   Dev Project Modal
───────────────────────────────────────────── */
const DevModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const statusColor =
    project.status === "Completed"
      ? "rgba(16,185,129,0.9)"
      : project.status === "In Progress"
      ? "rgba(245,158,11,0.9)"
      : "rgba(99,102,241,0.9)";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden modal-enter"
        style={{
          background: "rgba(18,18,28,0.96)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        {/* Accent glow top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />

        {/* Header banner */}
        <div
          className="relative flex items-center gap-4 px-6 pt-6 pb-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl shrink-0"
            style={{ background: project.gradient, border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {project.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-white font-bold text-lg leading-tight">{project.title}</h2>
              <span
                className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border"
                style={{ color: statusColor, borderColor: statusColor, background: `${statusColor}15` }}
              >
                {project.status}
              </span>
            </div>
            <p className="text-white/40 text-xs mt-0.5 truncate">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-150"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex flex-col gap-5">

          {/* About */}
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 block mb-2">About</span>
            <p className="text-white/65 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Role", value: project.role },
              { label: "Year", value: project.year },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-[9px] font-mono tracking-widest uppercase text-white/30 block mb-1">{label}</span>
                <span className="text-white/80 text-xs font-medium leading-snug">{value}</span>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 block mb-2">Tech Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-lg font-mono"
                  style={{
                    background: `${project.accentHex}18`,
                    border: `1px solid ${project.accentHex}35`,
                    color: project.accent,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className="px-6 pb-6 flex items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem" }}
        >
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${project.accentHex}cc, ${project.accentHex}88)`,
                border: `1px solid ${project.accentHex}60`,
                color: "#fff",
                boxShadow: `0 4px 20px ${project.accentHex}30`,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Live Site
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold cursor-not-allowed"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Live Site Unavailable
            </div>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm text-white/40 hover:text-white/70 hover:bg-white/06 transition-all duration-150 border border-white/08"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Design / Poster Modal
───────────────────────────────────────────── */
const PosterModal = ({ poster, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!poster) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative modal-enter flex flex-col items-center gap-3 max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-150"
          style={{ background: "rgba(30,30,40,0.95)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {/* Image */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: `1px solid ${poster.accent}40`,
            boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${poster.accent}20`,
            maxHeight: "75vh",
          }}
        >
          <img
            src={poster.src}
            alt={poster.title}
            className="block max-h-[75vh] w-auto object-contain"
            style={{ maxWidth: "min(90vw, 420px)" }}
          />
        </div>

        {/* Caption */}
        <div className="flex items-center gap-3">
          <span className="text-white/80 text-sm font-medium">{poster.title}</span>
          <span
            className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border"
            style={{ color: poster.accent, borderColor: poster.accent, background: `${poster.accent}15` }}
          >
            {poster.category}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Poster Gallery
───────────────────────────────────────────── */
const PosterGallery = ({ onPosterClick }) => {
  const [hovered, setHovered] = useState(null);
  const [failedPosters, setFailedPosters] = useState(() => new Set());

  return (
    <div className="p-4 sm:p-6">
      <div className="poster-grid grid gap-3 sm:gap-4">
        {posterData.map((poster, i) => (
          <div
            key={poster.id}
            className="poster-card"
            style={{ animationDelay: `${i * 55}ms` }}
            onMouseEnter={() => setHovered(poster.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onPosterClick(poster)}
          >
            <div
              className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
              style={{
                aspectRatio: "2/3",
                background: poster.gradient,
                boxShadow:
                  hovered === poster.id
                    ? `0 0 0 1.5px ${poster.accent}, 0 20px 48px rgba(0,0,0,0.65)`
                    : "0 4px 20px rgba(0,0,0,0.4)",
                transform: hovered === poster.id ? "translateY(-5px) scale(1.025)" : "none",
                transition: "all 0.32s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {poster.src && !failedPosters.has(poster.id) ? (
                <img
                  src={poster.src}
                  alt={poster.title}
                  loading="lazy"
                  decoding="async"
                  onError={() =>
                    setFailedPosters((prev) => {
                      const next = new Set(prev);
                      next.add(poster.id);
                      return next;
                    })
                  }
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center opacity-40" style={{ borderColor: poster.accent }}>
                    <span className="text-base">✦</span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase opacity-30" style={{ fontFamily: "'DM Mono', monospace" }}>add image</span>
                </div>
              )}

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-3"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 65%)",
                  opacity: hovered === poster.id ? 1 : 0,
                  transition: "opacity 0.22s ease",
                }}
              >
                <span className="text-xs font-medium text-white/90 leading-snug" style={{ fontFamily: "'DM Serif Display', serif" }}>{poster.title}</span>
                <span className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: poster.accent, fontFamily: "'DM Mono', monospace" }}>{poster.category}</span>
              </div>

              <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-white/25 to-transparent" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-[10px] text-white/20 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
        click to expand · {posterData.length} works
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Projects component
───────────────────────────────────────────── */
function Projects() {
  const [activeTab, setActiveTab] = useState("dev");
  const [selectedDev, setSelectedDev] = useState(null);
  const [selectedPoster, setSelectedPoster] = useState(null);

  // Build StickyScroll content with click handler injected
  const devContent = devData.map((project) => ({
    title: project.title,
    description: project.description,
    content: (
      <div
        className="h-full w-full cursor-pointer group"
        onClick={() => setSelectedDev(project)}
      >
        <GlassCard gradient={project.gradient} label={project.label} icon={project.icon} />
        {/* Subtle click hint */}
        <div
          className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <span
            className="text-[9px] tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              fontFamily: "'DM Mono', monospace",
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            click to expand
          </span>
        </div>
      </div>
    ),
  }));

  const tabs = [
    { id: "dev",    label: "Dev Projects", icon: "⌥" },
    { id: "design", label: "Design Work",  icon: "✐" },
  ];

  return (
    <>
      <style>{`
        .glass-scroll-wrapper {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.2);
          overflow: hidden;
        }
        .projects-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: rgba(255,255,255,0.95);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .projects-subheading {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(99,102,241,0.9);
        }
        .win-tab {
          display: flex; align-items: center; gap: 5px;
          padding: 4px 12px; border-radius: 7px;
          font-family: 'DM Mono', monospace; font-size: 0.68rem;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer; border: 1px solid transparent;
          transition: all 0.2s ease; color: rgba(255,255,255,0.35);
          background: transparent; white-space: nowrap;
        }
        .win-tab:hover { color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.05); }
        .win-tab.active {
          color: rgba(255,255,255,0.92);
          background: rgba(99,102,241,0.18);
          border-color: rgba(99,102,241,0.45);
          box-shadow: 0 0 14px rgba(99,102,241,0.18), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .panel-fade { animation: fadeSlide 0.28s ease both; }
        @keyframes fadeSlide { from { opacity:0; transform:translateY(7px); } to { opacity:1; transform:translateY(0); } }
        .poster-card { animation: cardIn 0.38s ease both; }
        @keyframes cardIn { from { opacity:0; transform:scale(0.93); } to { opacity:1; transform:scale(1); } }
        .poster-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (min-width: 640px) { .poster-grid { grid-template-columns: repeat(auto-fill, minmax(min(100%, 180px), 1fr)); } }
        @keyframes orb-pulse { 0%,100%{opacity:.12;transform:scale(1);} 50%{opacity:.22;transform:scale(1.08);} }
        .orb-pulse      { animation: orb-pulse 6s ease-in-out infinite; }
        .orb-pulse-slow { animation: orb-pulse 9s ease-in-out infinite reverse; }
        .corner-mark { position:absolute; width:20px; height:20px; border-color:rgba(255,255,255,0.18); border-style:solid; }
        @media (max-width: 768px) { .glass-scroll-wrapper { border-radius: 16px; } .projects-heading { font-size: 1.75rem; } }

        /* Modal entrance */
        .modal-enter { animation: modalIn 0.25s cubic-bezier(0.34,1.4,0.64,1) both; }
        @keyframes modalIn { from { opacity:0; transform:scale(0.92) translateY(12px); } to { opacity:1; transform:scale(1) translateY(0); } }
      `}</style>

      <section
        className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
        id="projects"
      >
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-pulse absolute rounded-full blur-3xl" style={{ width:"520px",height:"520px",top:"10%",left:"-8%",background:"radial-gradient(circle,rgba(99,102,241,0.35) 0%,transparent 70%)" }} />
          <div className="orb-pulse-slow absolute rounded-full blur-3xl" style={{ width:"480px",height:"480px",bottom:"5%",right:"-6%",background:"radial-gradient(circle,rgba(139,92,246,0.3) 0%,transparent 70%)" }} />
          <div className="orb-pulse absolute rounded-full blur-3xl" style={{ width:"300px",height:"300px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%)",animationDelay:"3s" }} />
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.3) 1px,transparent 1px)",backgroundSize:"28px 28px" }} />
          <div className="corner-mark top-6 left-6 border-t-2 border-l-2 rounded-tl-lg" />
          <div className="corner-mark top-6 right-6 border-t-2 border-r-2 rounded-tr-lg" />
          <div className="corner-mark bottom-6 left-6 border-b-2 border-l-2 rounded-bl-lg" />
          <div className="corner-mark bottom-6 right-6 border-b-2 border-r-2 rounded-br-lg" />
        </div>

        {/* Main content */}
        <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-10 sm:mb-14 flex flex-col gap-3">
            <span className="projects-subheading">// Selected work</span>
            <h2 className="projects-heading font-bold">Featured <em>Projects</em></h2>
            <div className="flex items-center gap-3 mt-1">
              <div className="h-px w-12 bg-gradient-to-r from-indigo-500 to-transparent" />
              <div className="text-xs text-white/30" style={{ fontFamily:"'DM Mono',monospace" }}>
                {activeTab === "dev"
                  ? `${String(devData.length).padStart(2,"0")} dev entries`
                  : `${String(posterData.length).padStart(2,"0")} design pieces`}
              </div>
            </div>
          </div>

          <div className="glass-scroll-wrapper">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02] flex-wrap gap-y-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1 shrink-0" />
              <div className="flex items-center gap-1">
                {tabs.map((tab) => (
                  <button key={tab.id} className={`win-tab ${activeTab === tab.id ? "active" : ""}`} onClick={() => setActiveTab(tab.id)}>
                    <span className="opacity-70">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              <span className="ml-auto text-[10px] text-white/18 tracking-widest uppercase shrink-0 hidden sm:block" style={{ fontFamily:"'DM Mono',monospace" }}>
                portfolio.view
              </span>
            </div>

            {/* Panel */}
            <div key={activeTab} className="panel-fade">
              {activeTab === "dev" ? (
                <div className="p-2 sm:p-4">
                  <StickyScroll content={devContent} />
                </div>
              ) : (
                <PosterGallery onPosterClick={setSelectedPoster} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedDev && <DevModal project={selectedDev} onClose={() => setSelectedDev(null)} />}
      {selectedPoster && <PosterModal poster={selectedPoster} onClose={() => setSelectedPoster(null)} />}
    </>
  );
}

export default Projects;