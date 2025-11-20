const team = [
  { name: 'Maria', role: 'Senior Stylist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Jonas', role: 'Frisør', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Nadia', role: 'Color Specialist', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-neutral-900">Team</h2>
          <p className="mt-3 text-neutral-600">Mød menneskerne bag saksen</p>
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
