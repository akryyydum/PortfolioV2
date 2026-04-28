import Profile from './components/Profile'
import './App.css'
import Navbar from './components/navbar'
import PixelBlast from './components/PixelBlast';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
function App() {

  return (
    <div>
      <div style={{ position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B497CF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
</div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}
      className='flex justify-center items-center'>
        <Navbar />
      </div>
      <Profile />
      <AboutMe />
      <Education />
      <Experience />
    </div>
  )
}

export default App
