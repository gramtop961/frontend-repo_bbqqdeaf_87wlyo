import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-4xl text-neutral-900">Kontakt os</h2>
            <div className="mt-6 space-y-4 text-neutral-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p>Frisør Pilo v/Charlotte Solevad</p>
                  <p>CVR: 18664984</p>
                  <p>Nørregade 50, st. tv.</p>
                  <p>4600 Køge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <p>40 28 30 50</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <p>charlotte@frisør-pilo.dk</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Åbningstider</p>
                  <p>Mandag, torsdag og fredag: kl. 09.00 - 17.00</p>
                  <p>Tirsdag, onsdag og lørdag: kun efter aftale</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-sm">
              <h3 className="font-serif text-2xl mb-4">Skriv til os</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Navn</label>
                  <input type="text" className="w-full rounded-xl border-neutral-300 focus:border-black focus:ring-black" placeholder="Dit navn" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Telefon</label>
                    <input type="tel" className="w-full rounded-xl border-neutral-300 focus:border-black focus:ring-black" placeholder="40 28 30 50" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">E-mail</label>
                    <input type="email" className="w-full rounded-xl border-neutral-300 focus:border-black focus:ring-black" placeholder="charlotte@frisør-pilo.dk" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Besked</label>
                  <textarea rows="5" className="w-full rounded-xl border-neutral-300 focus:border-black focus:ring-black" placeholder="Hvordan kan vi hjælpe?" />
                </div>
                <button type="submit" className="w-full rounded-full bg-black text-white py-3 font-medium hover:bg-neutral-800 transition">Send besked</button>
                <p className="text-xs text-neutral-500 text-center">Vi vender tilbage hurtigst muligt</p>
              </form>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200">
              <iframe title="map" src="https://www.google.com/maps?q=N%C3%B8rregade%2050%2C%204600%20K%C3%B8ge&output=embed" width="100%" height="300" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
