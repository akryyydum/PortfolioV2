import Lance from '../assets/Lance.png'
import { useState, useRef } from 'react'

function Profile() {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -12
    const rotateY = ((x - cx) / cx) * 12
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`)
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.18 })
  }

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black/50" id="home">

      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-2xl" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-2xl" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 px-8 max-w-5xl w-full">

        {/* Text side */}
        <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 self-center md:self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Available for work</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hello! My<br />name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Lance.</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            I'm an aspiring front-end developer from Saint Mary's University taking an Information Technology degree.
          </p>
          <div className="flex gap-3 mt-2 justify-center md:justify-start">
            <a href="#projects"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:scale-105">
              View Projects
            </a>
            <a href="#contact"
              className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-all duration-200 hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Image Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform,
            transition: transform.includes('0deg') ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
          }}
          className="relative flex-shrink-0 cursor-pointer"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-4 rounded-3xl bg-indigo-500/20 blur-2xl pointer-events-none" />

          {/* Card frame */}
          <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}>

            <img
              src={Lance}
              alt="Lance"
              className="w-72 lg:w-80 aspect-square object-cover"
            />

            {/* Glare overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.5) 0%, transparent 60%)`,
                opacity: glare.opacity,
              }}
            />

          </div>

          {/* Floating decoration dots */}
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-indigo-500/60 border border-indigo-300/30"
            style={{ transform: 'translateZ(30px)' }} />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-violet-500/60 border border-violet-300/30"
            style={{ transform: 'translateZ(25px)' }} />
        </div>
      </div>
    </div>
  )
}

export default Profile