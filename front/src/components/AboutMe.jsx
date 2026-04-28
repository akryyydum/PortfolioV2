
function AboutMe() {
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-black/50" id="about">
            <div className="flex flex-col justify-center items-center w-4xl">
                <div className="flex">
                    <span className="text-5xl font-bold p-3 justify-end shadow-md">About Me</span>
                </div>
                <div className="flex justify-center items-center w-full p-4">
                    <span className="text-md">I'm an aspiring front-end developer from Saint Mary's University taking an Information Technology degree. I have a passion for creating visually appealing and user-friendly websites and applications. I enjoy learning new technologies and staying up-to-date with the latest trends in web development.</span>
                </div>
                <div className="flex gap-4.5">
                    <div className="flex flex-col bg-white/5 w-sm rounded-2xl shadow-lg backdrop-blur-sm p-4 ">
                    <span className="text-lg font-bold">Languages</span>
                    <span className="text-lg">JavaScript, Python, Java, C++, C#, Kotlin, HTML, CSS, VB.Net, SQL</span>
                    </div>
                    <div className="flex flex-col bg-white/5 w-sm rounded-2xl shadow-lg backdrop-blur-sm p-4">
                    <span className="text-lg font-bold">Framework / Libraries</span>
                    <span className="text-lg">React, Node.js, Express, TailwindCSS, MUI, AntDesign, Shadcn</span>
                    </div>
                    <div className="flex flex-col bg-white/5 w-sm rounded-2xl shadow-lg backdrop-blur-sm p-4">
                    <span className="text-lg font-bold">Creative Tools</span>
                    <span className="text-lg">Photoshop, Canva, Figma, Premiere Pro, Davinci Resolve, </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe  