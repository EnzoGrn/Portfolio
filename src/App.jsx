import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseGlow from './components/MouseGlow'
import EasterEggs from './easter-eggs/EasterEggs'
import EasterEggsPage from './pages/EasterEggsPage'
import StarryBackground from './components/StarryBackground'
import './styles/globals.css'

function isEasterEggsPage() {
  return window.location.pathname === '/easter-eggs'
}

export default function App() {
  const { dark, toggle } = useTheme()

  if (isEasterEggsPage()) {
    return (
      <>
        <Navbar dark={dark} toggle={toggle} />
        <EasterEggsPage />
      </>
    )
  }

  return (
    <>
      <StarryBackground />
      <EasterEggs />
      <MouseGlow />
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}