const images = [
  'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/14_orig.jpg',
  'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/editor/10.jpg?1645172942',
  'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/editor/6.jpg?1645172997',
  'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/editor/9.jpg?1645173063',
  'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/editor/8.jpg?1645173110',
  'https://www.fris%C3%B8r-pilo.dk/uploads/1/2/6/0/126007235/published/11.jpg?1645173266'
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
