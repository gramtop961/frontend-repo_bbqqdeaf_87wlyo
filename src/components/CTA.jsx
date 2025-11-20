export default function CTA() {
  return (
    <section id="toupeer" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-4xl text-neutral-900">Toupéer & toppe</h2>
            <p className="mt-4 text-neutral-600">Skræddersyede løsninger til fortyndet hår eller lokale områder med hårtab. Vores toupéer/toppe er lette, åndbare og tilpasses din hovedform, farve og struktur for et naturligt resultat.</p>
            <p className="mt-3 text-neutral-600">Book en diskret, uforpligtende rådgivning – vi hjælper dig sikkert gennem valg, tilpasning og vedligehold.</p>
            <div className="mt-6">
              <a href="#kontakt" className="inline-flex justify-center rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-neutral-800 transition">Book rådgivning</a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/editor/12.jpg?1645172869" alt="Toupé og top" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
