export default function About() {
  return (
    <section id="omos" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-4xl text-neutral-900">Om os</h2>
            <p className="mt-4 text-neutral-600">Hos Frisør Pilo kombinerer vi klassisk håndværk med moderne teknikker. Vi tager os tid til at lytte til dine ønsker og rådgive om de bedste løsninger til netop dit hår.</p>
            <p className="mt-3 text-neutral-600">Vores salon er et roligt rum, hvor kvalitet, nærvær og personlige detaljer er i fokus. Vi arbejder med nøje udvalgte produkter og sikrer en helhedsoplevelse fra du træder ind.</p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop" alt="Om os" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
