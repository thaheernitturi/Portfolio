import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Techo from './components/Techno'
import Experiance from './components/Experiance'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialaised selection:bg-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
      
      <div className='container mx-auto px-8'>
      <Navbar />
      <Intro />
      <About />
      <Techo />
      <Experiance />
      <Projects />
      <Contact />
      </div>
      </div>
      
      
   
     
  )
}

export default App