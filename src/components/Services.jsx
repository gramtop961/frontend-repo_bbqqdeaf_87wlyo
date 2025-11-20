import { Scissors, Sparkles, Palette, SprayCan } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Dame- & Herreklip', text: 'Skræddersyede klipninger der fremhæver din personlighed og stil.' },
  { icon: Palette, title: 'Farve & Reflekser', text: 'Naturlige nuancer eller modige looks – altid med fokus på kvalitet.' },
  { icon: Sparkles, title: 'Kur & Pleje', text: 'Forkæl håret med plejende kure og professionelle produkter.' },
  { icon: SprayCan, title: 'Styling & Opsætning', text: 'Smuk styling til hverdag, fest og særlige anledninger.' }
]

export default function Services() {
  return (
    <section id="behandlinger" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-neutral-900">Behandlinger</h2>
          <p className="mt-3 text-neutral-600">Et udsnit af vores mest populære ydelser</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-6 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-neutral-600 text-sm mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
