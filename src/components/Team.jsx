const team = [
  { name: 'Charlotte Solevad', role: 'Indehaver, specialist i parykker & toupéer', img: 'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/published/3.jpg?1645173339' }
]

export default function Team() {
  return (
    <section id="vipper-bryn" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-neutral-900">Team</h2>
          <p className="mt-3 text-neutral-600">Mød Charlotte</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
              <div className="p-5">
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-sm text-neutral-600">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
