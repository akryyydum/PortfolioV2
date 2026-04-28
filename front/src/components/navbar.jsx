
function Navbar() {
    return (
        <nav className="bg-white/10 backdrop-blur-sm border border-white/15 p-4 w-7xl rounded-3xl justify-center mt-4">
            <div className="container flex items-center justify-between">
                <div className="text-white text-lg font-bold">Lance's Portfolio</div>
                <div>
                    <a href="#home" className="text-gray-300 hover:text-white px-3">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white px-3">About</a>
                    <a href="#education" className="text-gray-300 hover:text-white px-3">Education</a>
                    <a href="#experience" className="text-gray-300 hover:text-white px-3">Experiences</a>
                    <a href="#projects" className="text-gray-300 hover:text-white px-3">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white px-3">Contact</a>
                </div>
            </div>
        </nav>
    )   
}

export default Navbar