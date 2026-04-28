import { GlassMorphCard } from "@/components/glass-morph-card"

function Experience() {

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen gap-10' id='experience'>
            <h2 className='text-7xl font-bold'>Experiences</h2>
            <div className='flex flex-col gap-4'>
                <GlassMorphCard>
                    <div className="flex flex-col gap-2 p-4">
                        <span className="text-xl font-bold">Information Technology Intern</span>
                        <span className="text-lg">Cerebro Solutions</span>
                        <span className="text-md">June 2024 - August 2024</span>
                        
                    </div>
                </GlassMorphCard>
                </div>
        </div>
    )
}

export default Experience