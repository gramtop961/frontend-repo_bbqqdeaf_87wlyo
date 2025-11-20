import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-4xl text-neutral-900">Kontakt</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <p>Adresse – opdater med jeres fulde adresse</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <p>+45 00 00 00 00</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <p>kontakt@frisoer-pilo.dk</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1" />
                <p>Hverdage: 10-18 • Lørdag: 10-15</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.061873167234!2d12.5683378!3d55.6760963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQwJzMzLjkiTiAxMsKwMzQnMDYuMCJF!5e0!3m2!1sen!2sdk!4v1616161616161" width="100%" height="360" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
