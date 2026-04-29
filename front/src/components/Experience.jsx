import { GlassMorphCard } from "@/components/glass-morph-card";
import { ContainerScroll } from "./ui/container-scroll-animation";

function Experience() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full min-h-screen gap-4"
      id="experience"
    >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
              I grew from this.. <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
                Experiences
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col justify-center items-center gap-y-2 px-2 md:px-0">
          <span className="text-xl md:text-3xl font-bold">Experiences</span>

          {/* Row 1 — 3 cards */}
          <div className="flex flex-col md:flex-row gap-2 w-full justify-center">
            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">Information Technology Intern</span>
                <span className="text-xs md:text-lg">Cerebro Solutions</span>
                <span className="text-xs md:text-md text-white/60">February 2026 – May 2026</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">Social Media Manager</span>
                <span className="text-xs md:text-lg">MICRO-JPCS</span>
                <span className="text-xs md:text-md text-white/60">August 2025 – June 2026</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">Freelance Graphic Designer</span>
                <span className="text-xs md:text-lg">Self-Employed</span>
                <span className="text-xs md:text-md text-white/60">June 2023 – Present</span>
              </div>
            </GlassMorphCard>
          </div>

          {/* Row 2 — 2 cards */}
          <div className="flex flex-col md:flex-row gap-2 w-full justify-center">
            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">
                  Business Manager & Decorations Director
                </span>
                <span className="text-xs md:text-lg">SCEAIT</span>
                <span className="text-xs md:text-md text-white/60">August 2023 – June 2025</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">Junior Layout Artist</span>
                <span className="text-xs md:text-lg">The Marian</span>
                <span className="text-xs md:text-md text-white/60">January 2023 – June 2023</span>
              </div>
            </GlassMorphCard>
          </div>

          <span className="text-lg md:text-2xl font-bold mt-1">Achievements</span>

          {/* Row 3 — 3 cards */}
          <div className="flex flex-col md:flex-row gap-2 w-full justify-center">
            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">Oral Presentor</span>
                <span className="text-xs md:text-lg">IRCITE 2026</span>
                <span className="text-xs md:text-md text-white/60">March 2026</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">4th Place Hack4Gov</span>
                <span className="text-xs md:text-lg">DICT Region 2</span>
                <span className="text-xs md:text-md text-white/60">October 2025</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-1 p-3">
                <span className="text-sm md:text-xl font-bold">Regional Pitching Competition</span>
                <span className="text-xs md:text-lg">Philippine Start-up Challenge 9</span>
                <span className="text-xs md:text-md text-white/60">October 2024</span>
              </div>
            </GlassMorphCard>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Experience;