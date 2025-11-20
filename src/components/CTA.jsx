export default function CTA() {
  return (
    <section id="booking" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black text-white p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-3xl">Klar til forandring?</h3>
            <p className="mt-2 text-white/80">Book din tid i dag – vi glæder os til at byde dig velkommen.</p>
          </div>
          <a href="#kontakt" className="inline-flex justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-neutral-100 transition">Kontakt os</a>
        </div>
      </div>
    </section>
  )
}
