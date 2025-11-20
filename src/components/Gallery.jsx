const images = [
  'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519414442781-fbd745c5b497?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="galleri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl text-neutral-900">Galleri</h2>
          <p className="mt-3 text-neutral-600">Et kig ind i vores univers</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt="Galleri" className="w-full h-56 object-cover hover:scale-[1.02] transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
