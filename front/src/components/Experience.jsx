import { GlassMorphCard } from "@/components/glass-morph-card"

function Experience() {

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen gap-4 bg-black/50' id='experience'>
            <h2 className='text-7xl font-bold'>Experiences</h2>
            <div className="flex flex-col justify-center items-center gap-y-2">
            <div className='flex gap-x-2'>
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
                        <span className="text-xl font-bold">Business Manager & Decorations Director</span>
                        <span className="text-lg">SCEAIT</span>
                        <span className="text-md">August 2023 - June 2025</span>
                        
                    </div>
                </GlassMorphCard>
                <GlassMorphCard>
                    <div className="flex flex-col gap-2 p-4">
                        <span className="text-xl font-bold">Junior Layout Artist</span>
                        <span className="text-lg">the Marian</span>
                        <span className="text-md">January 2023 - June 2023</span>
                    </div>
                </GlassMorphCard>
                </div>
                </div>
        </div>
    )
}

export default Experience