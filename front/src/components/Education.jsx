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
    <div className="flex justify-center items-center min-h-screen bg-black/50" id="education">
      <div className="flex justify-center items-center gap-12">
        <h2 className="text-7xl font-bold">Education</h2>

        {/* Timeline container */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical spine */}
          <div className="absolute left-4 top-6 bottom-6 w-px bg-white/20" />

          {items.map((item, i) => (
            <div key={i} className="relative flex items-start gap-6 pb-8 last:pb-0">
              {/* Dot on the spine */}
              <div className="relative z-10 mt-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/70" />
                </div>
              </div>

              {/* Horizontal branch line */}
              <div className="absolute left-8 top-5 w-4 h-px bg-white/20" />

              {/* Card */}
              <div className="bg-white/5 p-4 rounded-2xl shadow-lg backdrop-blur-sm w-80">
                <span className="text-xs text-white/40 font-mono">{item.year}</span>
                <h3 className="text-lg font-bold mt-1">{item.degree}</h3>
                <p className="text-sm text-white/60 mt-1">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;