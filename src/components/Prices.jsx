const priceGroups = [
  {
    title: 'Parykker & toupéer',
    items: [
      { name: 'Rådgivning og tilpasning', price: 'inkl. i køb' },
      { name: 'Ægtehårs-paryk (fra)', price: 'Ring for pris' },
      { name: 'Toupé / top (fra)', price: 'Ring for pris' },
    ]
  },
  {
    title: 'Extensions',
    items: [
      { name: 'Forlængelse / fortætning', price: 'Ring for pris' },
      { name: 'Vedligehold', price: 'Ring for pris' },
      { name: 'Aftagning', price: 'Ring for pris' },
    ]
  }
]

export default function Prices() {
  return (
    <section id="parykker" className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-neutral-900">Priser</h2>
          <p className="mt-3 text-neutral-600">Kontakt os for et uforpligtende tilbud – priser varierer efter løsning</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {priceGroups.map((g) => (
            <div key={g.title} className="rounded-2xl bg-white border border-neutral-200 p-6">
              <h3 className="font-medium text-lg mb-4">{g.title}</h3>
              <ul className="divide-y">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-center justify-between py-3">
                    <span className="text-neutral-700">{it.name}</span>
                    <span className="font-medium">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
