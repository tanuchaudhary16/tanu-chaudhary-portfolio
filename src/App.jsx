import React from 'react'

import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {

  return (

    <div className='font-sora overflow-x-hidden bg-white text-black'>

      <Navbar />

      <main className='scroll-smooth'>

        <Home />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Achievements />

        <Certifications />

        <Contact />

      </main>

      <Footer />

    </div>

  )

}