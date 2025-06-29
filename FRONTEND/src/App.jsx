import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Home />
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
