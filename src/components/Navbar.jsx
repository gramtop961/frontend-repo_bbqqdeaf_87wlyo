import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#hjem', label: 'Hjem' },
  { href: '#extensions', label: 'Extensions' },
  { href: '#parykker', label: 'Parykker' },
  { href: '#toupeer', label: 'Toupéer' },
  { href: '#hovedbeklaedning', label: 'Hovedbeklædning' },
  { href: '#vipper-bryn', label: 'Vipper og bryn' },
  { href: '#galleri', label: 'Galleri' },
  { href: '#kontakt', label: 'Kontakt os' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hjem" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center text-sm font-semibold">FP</div>
            <span className="font-serif text-xl tracking-wide">Frisør Pilo</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-neutral-700 hover:text-black transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
              <Phone className="w-4 h-4" /> Book tid
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Åbn menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-neutral-800 hover:bg-neutral-100">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md bg-black text-white text-center">Book tid</a>
          </div>
        </div>
      )}
    </header>
  )
}
