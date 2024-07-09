import { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import { DarkModeContext } from './components/DarkModeContext'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  return (
    <main className={`${darkMode && 'dark'}  pt-18`}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
