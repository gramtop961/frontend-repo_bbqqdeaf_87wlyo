import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import Gallery from './components/Gallery'
import Team from './components/Team'
import CTA from './components/CTA'
import About from './components/About'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="font-sans text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Prices />
        <Gallery />
        <Team />
        <CTA />
        <About />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Frisør Pilo</footer>
    </div>
  )
}

export default App
