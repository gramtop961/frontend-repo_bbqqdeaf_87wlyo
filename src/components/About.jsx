export default function About() {
  return (
    <section id="hovedbeklaedning" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-4xl text-neutral-900">Om os</h2>
            <p className="mt-4 text-neutral-600">Frisør Pilo v/Charlotte Solevad er specialiseret i løsninger til hårtab – parykker, toupéer, toppe og hovedbeklædning – samt naturlige extensions. Vi tilbyder rolig, privat rådgivning med fokus på komfort og et naturligt udtryk.</p>
            <p className="mt-3 text-neutral-600">Vi er godkendt leverandør og hjælper gerne med spørgsmål om tilskud og praktiske forhold. Kontakt os for en tryg, personlig samtale.</p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img src="https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/editor/1.jpg?1645172706" alt="Om Frisør Pilo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
