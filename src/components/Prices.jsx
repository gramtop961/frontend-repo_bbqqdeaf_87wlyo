const priceGroups = [
  {
    title: 'Klip',
    items: [
      { name: 'Dameklip', price: 'fra 499,-' },
      { name: 'Herreklip', price: 'fra 399,-' },
      { name: 'Børneklip', price: 'fra 299,-' },
    ]
  },
  {
    title: 'Farve',
    items: [
      { name: 'Reflekser', price: 'fra 699,-' },
      { name: 'Helfarve', price: 'fra 799,-' },
      { name: 'Balayage', price: 'fra 1199,-' },
    ]
  }
]

export default function Prices() {
  return (
    <section id="priser" className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-neutral-900">Priser</h2>
          <p className="mt-3 text-neutral-600">Et udpluk – kontakt os for fuld prisliste</p>
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
