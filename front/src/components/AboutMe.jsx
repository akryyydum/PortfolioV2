import CardFlip from "./kokonutui/card-flip";

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);
const BrushIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.33l10.06-10.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const cards = [
  {
    title: "Languages",
    subtitle: "Core proficiency",
    icon: <CodeIcon />,
    accent: "from-indigo-500 to-indigo-700",
    glowColor: "bg-indigo-500/15",
    features: ["JavaScript", "HTML", "CSS", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frameworks",
    subtitle: "Tools & libraries",
    icon: <LayersIcon />,
    accent: "from-violet-500 to-violet-700",
    glowColor: "bg-violet-500/15",
    features: ["React", "Node.js", "Express", "TailwindCSS", "MUI", "AntDesign", "Shadcn"],
  },
  {
    title: "Creative",
    subtitle: "Design toolkit",
    icon: <BrushIcon />,
    accent: "from-fuchsia-500 to-fuchsia-700",
    glowColor: "bg-fuchsia-500/15",
    features: ["Photoshop", "Canva", "Figma", "Premiere Pro", "Davinci Resolve"],
  },
];

function AboutMe() {
  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden" id="about">

      {/* Background — consistent with Profile & Education */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
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

      <div className="relative flex flex-col items-center gap-10 px-8 max-w-5xl w-full">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Who I am</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Me</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-xl">
            I'm an aspiring front-end developer from Saint Mary's University taking an Information Technology degree. I have a passion for creating visually appealing and user-friendly websites and applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <div key={card.title} className="flex justify-center">
              <CardFlip
                front={
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                    {/* Glow blob */}
                    <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full ${card.glowColor} blur-2xl`} />

                    {/* Icon circle */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center text-white shadow-lg`}>
                        {card.icon}
                      </div>
                      {/* Orbiting dots */}
                      <div className="flex gap-1.5 mt-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.accent} opacity-${(i + 1) * 30}`} />
                        ))}
                      </div>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white font-bold text-lg leading-tight">{card.title}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{card.subtitle}</p>
                    </div>
                  </div>
                }
                back={
                  <div className={`h-full w-full rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-3`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${card.accent} flex items-center justify-center text-white`}>
                        {card.icon}
                      </div>
                      <span className="text-white font-semibold text-sm">{card.title}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {card.features.map((f, i) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-300"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.accent} flex-shrink-0`} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;