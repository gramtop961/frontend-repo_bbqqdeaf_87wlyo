export default function Hero() {
  return (
    <section id="hjem" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-neutral-900">
            Pilo – specialister i hårtab, parykker og extensions
          </h1>
          <p className="mt-5 text-lg text-neutral-600">
            Personlig rådgivning og skræddersyede løsninger i trygge rammer. Vi hjælper med alt fra naturlige parykker og toupéer til hårforlængelse med diskrete metoder.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#kontakt" className="inline-flex justify-center rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-neutral-800 transition">Book tid</a>
            <a href="#galleri" className="inline-flex justify-center rounded-full border border-neutral-300 px-6 py-3 text-neutral-800 font-medium hover:bg-neutral-50 transition">Se galleri</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1594870912442-19c0e52b1a42?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2Mzg0ODh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Salon Pilo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-neutral-200 blur-2xl opacity-70" />
          <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-neutral-100 blur-2xl opacity-70" />
        </div>
      </div>
    </section>
  )
}
