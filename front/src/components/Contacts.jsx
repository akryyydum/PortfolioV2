import { useState, useRef } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

/* ─────────────────────────────────────────────
   Social / Contact links
───────────────────────────────────────────── */
const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "lance@example.com",
    display: "lance@example.com",
    href: "mailto:lance@example.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.4) 100%)",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/lance",
    display: "github.com/lance",
    href: "https://github.com/lance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    accent: "#e2e8f0",
    gradient: "linear-gradient(135deg, rgba(226,232,240,0.2) 0%, rgba(148,163,184,0.15) 100%)",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/lance",
    display: "linkedin.com/in/lance",
    href: "https://linkedin.com/in/lance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    accent: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.4) 0%, rgba(14,165,233,0.3) 100%)",
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "facebook.com/lance",
    display: "facebook.com/lance",
    href: "https://facebook.com/lance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    accent: "#818cf8",
    gradient: "linear-gradient(135deg, rgba(129,140,248,0.4) 0%, rgba(99,102,241,0.3) 100%)",
  },
];

/* ─────────────────────────────────────────────
   MacBook screen content — rendered as the
   "screenshot" shown on the laptop lid
───────────────────────────────────────────── */
const ScreenContent = () => (
  <div
    className="h-full w-full flex flex-col"
    style={{
      background: "linear-gradient(135deg, #0a0a14 0%, #0d0d1f 40%, #0a1020 100%)",
      fontFamily: "'DM Mono', monospace",
    }}
  >
    {/* Fake browser bar */}
    <div
      className="flex items-center gap-2 px-4 py-2 shrink-0"
      style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
      </div>
      <div
        className="flex-1 mx-4 h-5 rounded flex items-center px-3"
        style={{ background: "rgba(255,255,255,0.06)", maxWidth: "280px" }}
      >
        <span className="text-white/30 text-[9px] tracking-wide">lance.dev/contact</span>
      </div>
    </div>

    {/* Screen body */}
    <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden">
      {/* Glow blob */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ width: "300px", height: "300px", top: "20%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
      />

      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-indigo-400/80">// Let's connect</span>
        <h2 className="text-3xl font-bold text-white leading-tight">
          Say <em className="not-italic text-indigo-400">Hello</em>
        </h2>
        <p className="text-white/40 text-xs max-w-xs leading-relaxed">
          Open to collaborations, freelance work, and interesting conversations.
        </p>
      </div>

      {/* Contact cards on screen */}
      <div className="relative grid grid-cols-2 gap-2 w-full max-w-sm">
        {contactLinks.map((link) => (
          <div
            key={link.id}
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{
              background: link.gradient,
              border: `1px solid ${link.accent}30`,
            }}
          >
            <span style={{ color: link.accent }} className="shrink-0 opacity-80">{link.icon}</span>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] text-white/40 tracking-widest uppercase">{link.label}</span>
              <span className="text-[10px] text-white/75 truncate">{link.display}</span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="relative text-[9px] text-white/20 tracking-widest uppercase"
      >
        scroll down to reach out ↓
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Contact Card
───────────────────────────────────────────── */
const ContactCard = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(link.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: just open the link
      window.open(link.href, "_blank");
    }
  };

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        background: hovered
          ? `${link.gradient}, rgba(255,255,255,0.02)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? link.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 8px 32px ${link.accent}18, 0 0 0 1px ${link.accent}20` : "none",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300"
        style={{
          background: hovered ? `${link.accent}25` : "rgba(255,255,255,0.05)",
          border: `1px solid ${hovered ? link.accent + "40" : "rgba(255,255,255,0.08)"}`,
          color: hovered ? link.accent : "rgba(255,255,255,0.5)",
        }}
      >
        {link.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 min-w-0">
        <span
          className="text-[10px] font-mono tracking-widest uppercase mb-0.5"
          style={{ color: hovered ? link.accent : "rgba(255,255,255,0.3)" }}
        >
          {link.label}
        </span>
        <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors truncate">
          {link.display}
        </span>
      </div>

      {/* Right action */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Copy button */}
        {link.id === "email" && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider uppercase transition-all duration-200"
            style={{
              background: copied ? `${link.accent}30` : "rgba(255,255,255,0.05)",
              border: `1px solid ${copied ? link.accent + "60" : "rgba(255,255,255,0.1)"}`,
              color: copied ? link.accent : "rgba(255,255,255,0.4)",
            }}
          >
            {copied ? (
              <>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                copied
              </>
            ) : (
              <>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                copy
              </>
            )}
          </button>
        )}

        {/* Arrow */}
        <div
          className="transition-all duration-200"
          style={{
            color: hovered ? link.accent : "rgba(255,255,255,0.2)",
            transform: hovered ? "translateX(2px)" : "none",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
      </div>

      {/* Shine line */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </a>
  );
};

/* ─────────────────────────────────────────────
   Main ContactMe component
───────────────────────────────────────────── */
function ContactMe() {
  // Encode the screen content as a data URL for MacbookScroll's `src`
  // We render the screen as an inline SVG foreignObject fallback,
  // but the cleanest approach is a static screenshot image.
  // Instead, we pass a Cloudinary/public image or use a blank and
  // overlay real content in the section below the MacBook.

  return (
    <>
      <style>{`
        .contact-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: rgba(255,255,255,0.95);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .contact-subheading {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(99,102,241,0.9);
          font-family: 'DM Mono', monospace;
        }
        .glass-contact-wrapper {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          box-shadow:
            0 24px 64px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(0,0,0,0.2);
          overflow: hidden;
        }

        @keyframes orb-pulse {
          0%,100% { opacity:0.12; transform:scale(1); }
          50%      { opacity:0.22; transform:scale(1.08); }
        }
        .orb-pulse      { animation: orb-pulse 6s ease-in-out infinite; }
        .orb-pulse-slow { animation: orb-pulse 9s ease-in-out infinite reverse; }

        .corner-mark {
          position: absolute;
          width: 20px; height: 20px;
          border-color: rgba(255,255,255,0.18);
          border-style: solid;
        }

        .contact-card-enter {
          animation: contactCardIn 0.4s cubic-bezier(0.34,1.2,0.64,1) both;
        }
        @keyframes contactCardIn {
          from { opacity:0; transform:translateY(12px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .glass-contact-wrapper { border-radius: 16px; }
          .contact-heading { font-size: 1.75rem; }
        }
      `}</style>

      <section
        className="relative flex flex-col items-center min-h-screen overflow-hidden bg-black/50"
        id="contact"
      >
        {/* ── Ambient orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-pulse absolute rounded-full blur-3xl" style={{ width:"520px",height:"520px",top:"5%",right:"-8%",background:"radial-gradient(circle,rgba(99,102,241,0.35) 0%,transparent 70%)" }} />
          <div className="orb-pulse-slow absolute rounded-full blur-3xl" style={{ width:"480px",height:"480px",bottom:"10%",left:"-6%",background:"radial-gradient(circle,rgba(139,92,246,0.3) 0%,transparent 70%)" }} />
          <div className="orb-pulse absolute rounded-full blur-3xl" style={{ width:"300px",height:"300px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%)",animationDelay:"3s" }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.3) 1px,transparent 1px)",backgroundSize:"28px 28px" }} />
          <div className="corner-mark top-6 left-6 border-t-2 border-l-2 rounded-tl-lg" />
          <div className="corner-mark top-6 right-6 border-t-2 border-r-2 rounded-tr-lg" />
          <div className="corner-mark bottom-6 left-6 border-b-2 border-l-2 rounded-bl-lg" />
          <div className="corner-mark bottom-6 right-6 border-b-2 border-r-2 rounded-br-lg" />
        </div>

        {/* ── MacBook scroll ── */}
        <div className="w-full overflow-hidden">
          <MacbookScroll
            src="https://res.cloudinary.com/dzlwcbxs0/image/upload/v1777398790/CURRY_ifwh5n.png"
            showGradient={true}
            title={
              <span className="font-bold tracking-tight">
                Let's build something <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #6366f1, #a78bfa, #06b6d4)" }}
                >
                  together.
                </span>
              </span>
            }
          />
        </div>

        {/* ── Main content below MacBook ── */}
        <div className="relative w-full max-w-2xl px-4 sm:px-6 lg:px-8 pb-24 -mt-10 sm:mt-0">

          {/* Heading */}
          <div className="mb-8 flex flex-col gap-3">
            <span className="contact-subheading">// Get in touch</span>
            <h2 className="contact-heading font-bold">
              Contact <em>Me</em>
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <div className="h-px w-12 bg-gradient-to-r from-indigo-500 to-transparent" />
              <span
                className="text-xs text-white/30"
                style={{ fontFamily:"'DM Mono',monospace" }}
              >
                {String(contactLinks.length).padStart(2,"0")} channels
              </span>
            </div>
          </div>

          {/* Glass window */}
          <div className="glass-contact-wrapper">

            {/* Window chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom:"1px solid rgba(255,255,255,0.07)", background:"rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <span
                className="text-[10px] text-white/25 tracking-widest uppercase"
                style={{ fontFamily:"'DM Mono',monospace" }}
              >
                contact.channels
              </span>
              <span
                className="ml-auto text-[10px] text-white/18 tracking-widest uppercase hidden sm:block"
                style={{ fontFamily:"'DM Mono',monospace" }}
              >
                portfolio.contact
              </span>
            </div>

            {/* Cards */}
            <div className="p-4 flex flex-col gap-2">
              {contactLinks.map((link, i) => (
                <div
                  key={link.id}
                  className="contact-card-enter"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <ContactCard link={link} />
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div
              className="px-5 pb-5 pt-1 text-center"
              style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}
            >
              <p
                className="text-[10px] text-white/20 tracking-widest uppercase"
                style={{ fontFamily:"'DM Mono',monospace" }}
              >
                usually responds within 24 hours · open to opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;