import ContactForm from '@/components/Contact/ContactForm'
import Testimonial from '@/components/Testimonial/Testimonial'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Contact — Chibaraf',
  description: 'Get in touch with Chibaraf — partnership, supply, training and enquiries.',
}

export default function ContactPage() {
  return (
    <main className="antialiased">
      {/* Hero */}
      <header className="relative min-h-[44vh] flex items-center bg-[url('/images/contact-page.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="container mx-auto px-5 md:px-20 relative z-10 text-white text-center">
          <p className="inline-block bg-green-700/20 px-3 py-1 rounded-full text-sm mb-4">Let's create together</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Contact Chibaraf</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">Whether you're a farmer, buyer or partner — tell us about your needs and we'll respond within 48 hours.</p>
        </div>
      </header>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 md:px-20 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div>
            <div className="mb-6">
              <h4 className="text-green-600 font-semibold uppercase mb-2">Get in touch</h4>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">Start a conversation</h2>
              <p className="text-gray-600 mt-3">Share a few details and we’ll propose a plan, pricing and timeline tailored to your needs.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <ContactForm />
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Response time:</strong> Typically within 48 hours. For urgent matters call the phone number below.
            </div>
          </div>

          {/* Right: Contact details + map */}
          <aside className="space-y-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Contact details</h3>
              <ul className="text-gray-700 space-y-3">
                <li>
                  <span className="block text-sm text-gray-500">Phone</span>
                  <a href="tel:+1234567890" className="text-green-700 font-medium">+1 (234) 567-890</a>
                </li>
                <li>
                  <span className="block text-sm text-gray-500">Email</span>
                  <a href="mailto:hello@chibaraf.com" className="text-green-700 font-medium">hello@chibaraf.com</a>
                </li>
                <li>
                  <span className="block text-sm text-gray-500">Office</span>
                  <address className="not-italic text-gray-700">Douala, Cameroon</address>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border">
              <iframe
                title="Chibaraf location - Douala"
                src="https://www.google.com/maps?q=Douala+Cameroon&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Working hours</h3>
              <p className="text-gray-700">Mon — Fri: 08:00 — 17:00</p>
              <p className="text-gray-700">Sat: 09:00 — 13:00</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Social proof + CTA */}
      <Testimonial />

      <Footer />
    </main>
  )
}