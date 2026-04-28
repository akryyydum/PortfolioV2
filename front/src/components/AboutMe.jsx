import CardFlip from "./kokonutui/card-flip";
function AboutMe() {
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-black/50" id="about">
            <div className="flex w-full max-w-4xl flex-col items-center justify-center px-4">
                <div className="flex">
                    <span className="text-5xl font-bold p-3 justify-end shadow-md">About Me</span>
                </div>
                <div className="flex justify-center items-center w-full p-4">
                    <span className="text-md">I'm an aspiring front-end developer from Saint Mary's University taking an Information Technology degree. I have a passion for creating visually appealing and user-friendly websites and applications. I enjoy learning new technologies and staying up-to-date with the latest trends in web development.</span>
                </div>
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <CardFlip
                        title="Programming Languages"
                        subtitle="What I use most"
                        description="Languages I’m comfortable with"
                        features={["JavaScript", "HTML", "CSS", "Python", "Java", "C++", "SQL"]}
                        />
                        <CardFlip
                        title="Frameworks / Libraries"
                        subtitle="What I use most"
                        description="Frameworks and libraries I’m comfortable with"
                        features={["React", "Node.js", "Express", "TailwindCSS", "MUI", "AntDesign", "Shadcn"]}
                        />
                        <CardFlip
                        title="Creative Tools"
                        subtitle="What I use most"
                        description="Tools I’m comfortable with"
                        features={["Photoshop", "Canva", "Figma", "Premiere Pro", "Davinci Resolve"]}
                        />
                    
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe  