import { useRef, useState } from "react";

function EducationCard({ item, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="relative flex items-start gap-6 pb-10 last:pb-0">
      {/* Dot */}
      <div className="relative z-10 mt-1 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-400/50 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
        </div>
      </div>

      {/* Branch line */}
      <div className="absolute left-8 top-5 w-4 h-px bg-white/15" />

      {/* 3D Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: transform.includes("0deg")
            ? "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
            : "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="relative cursor-pointer"
      >
        {/* Glow */}
        <div className="absolute -inset-2 rounded-2xl bg-indigo-500/10 blur-xl pointer-events-none" />

        <div className="relative bg-white/5 border border-white/10 hover:border-indigo-400/30 backdrop-blur-sm rounded-2xl p-5 w-80 transition-colors duration-300">
          {/* Year badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-lg mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {item.year}
          </span>

          <h3 className="text-base font-bold text-white leading-snug">{item.degree}</h3>
          <p className="text-sm text-gray-400 mt-1.5">{item.school}</p>

          {/* Glare */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.45) 0%, transparent 60%)`,
              opacity: glare.opacity,
              transition: "opacity 0.2s",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Education() {
  const items = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Saint Mary's University",
      year: "2026",
    },
    {
      degree: "Science, Technology, Engineering, Mathematics",
      school: "Saint Vincent Ferrer School",
      year: "2021",
    },
    {
      degree: "Junior High School",
      school: "Saint Vincent Ferrer School",
      year: "2019",
    },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-black/50" id="education">

      {/* Background — matches Profile.jsx */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-2xl" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-2xl" />
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-center gap-16 px-8 max-w-5xl w-full">

        {/* Section heading */}
        <div className="flex flex-col gap-3 text-center md:text-left flex-shrink-0">
          <div className="inline-flex items-center gap-2 self-center md:self-start">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">Background</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Edu<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">cation</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xs">
            My academic journey and the institutions that shaped my skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Spine */}
          <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />

          {items.map((item, i) => (
            <EducationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;