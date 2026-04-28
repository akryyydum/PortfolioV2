import { GlassMorphCard } from "@/components/glass-morph-card";
import { ContainerScroll } from "./ui/container-scroll-animation";
function Experience() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full min-h-screen gap-4 bg-black/50"
      id="experience"
    >
      <ContainerScroll
      titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              I grew from this.. <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Experiences
              </span>
            </h1>
          </>
        }>
        

        <div className="flex flex-col justify-center items-center gap-y-2">
            
            <span className="text-3xl font-bold">Experiences</span>
          <div className="flex gap-x-2">
            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">Information Technology Intern</span>
                <span className="text-lg">Cerebro Solutions</span>
                <span className="text-md">February 2026 - May 2026</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">Social Media Manager</span>
                <span className="text-lg">MICRO-JPCS</span>
                <span className="text-md">August 2025 - June 2026</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">Freelance Graphic Designer</span>
                <span className="text-lg">Self-Employed</span>
                <span className="text-md">June 2023 - Present</span>
              </div>
            </GlassMorphCard>
          </div>

          <div className="flex gap-x-2">
            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">
                  Business Manager & Decorations Director
                </span>
                <span className="text-lg">SCEAIT</span>
                <span className="text-md">August 2023 - June 2025</span>
              </div>
            </GlassMorphCard>

            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">Junior Layout Artist</span>
                <span className="text-lg">The Marian</span>
                <span className="text-md">January 2023 - June 2023</span>
              </div>
            </GlassMorphCard>
          </div>
          <span className="text-2xl font-bold">Achievements</span>
          <div className="flex gap-x-2">
            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">Oral Presentor</span>
                <span className="text-lg">IRCITE 2026</span>
                <span className="text-md">January 2023 - June 2023</span>
              </div>
            </GlassMorphCard>
            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">4th Place Hack4Gov</span>
                <span className="text-lg">DICT Region 2</span>
                <span className="text-md">January 2023 - June 2023</span>
              </div>
            </GlassMorphCard>
            <GlassMorphCard>
              <div className="flex flex-col gap-2 p-4">
                <span className="text-xl font-bold">Regional Pitching Competition</span>
                <span className="text-lg">Philippine Start-up Challenge 9</span>
                <span className="text-md">January 2023 - June 2023</span>
              </div>
            </GlassMorphCard>

          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Experience;