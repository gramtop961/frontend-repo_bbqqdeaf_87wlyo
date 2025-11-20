import { Scissors, Sparkles, Palette, EyeOff, VenetianMask } from 'lucide-react'

const services = [
  { icon: Palette, title: 'Extensions', text: 'Naturlige forlængelser og fortætning i høj kvalitet – tilpasses farve, længde og struktur.' },
  { icon: VenetianMask, title: 'Parykker', text: 'Ægtehårs- og fiberparykker tilpasset dit ansigt og dine ønsker – diskret og trygt.' },
  { icon: EyeOff, title: 'Toupéer', text: 'Skræddersyede toupéer og toppe til både kvinder og mænd – lette, åndbare og naturlige.' },
  { icon: Sparkles, title: 'Hovedbeklædning', text: 'Bløde turbaner, huer og tørklæder i smukke materialer – komfort og stil i hverdagen.' }
]

export default function Services() {
  return (
    <section id="extensions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-neutral-900">Vores specialer</h2>
          <p className="mt-3 text-neutral-600">Personlige løsninger til hårtab og styling</p>
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
