
function Education() {
  return (
   <div className="flex justify-center items-center min-h-screen bg-black/50"  id="about">
    <div className="flex justify-center items-center gap-7">
        <h2 className="text-7xl font-bold mb-4">Education</h2>
        <div className="flex flex-col  gap-4">
            <div className="bg-white/5 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
                <p className="text-lg">Saint Mary's University</p>
                <p className="text-md">Graduated: 2026</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold">Science, Technology, Engineering, Mathematics</h3>
                <p className="text-lg">Saint Vincent Ferrer School</p>
                <p className="text-md">Graduated: 2021</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold">Junior High School</h3>
                <p className="text-lg">Saint Vincent Ferrer School</p>
                <p className="text-md">Graduated: 2019</p>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default Education
