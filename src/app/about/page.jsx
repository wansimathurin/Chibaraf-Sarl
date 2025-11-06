import AboutSection from '@/components/About/AboutSection'
import Testimonial from '@/components/Testimonial/Testimonial'
import AboutBanner from '@/components/About/AboutBanner'
import CreativeProcess from '@/components/About/CreativeProcess'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'About — Chibaraf',
  description:
    'Chibaraf — inspiring sustainable agriculture through creativity, community and care.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero / Banner (client component) */}
      <AboutBanner />

      {/* About / Story */}
      <AboutSection />

      {/* Creative Process (client component) */}
      <CreativeProcess />

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-green-600 font-semibold uppercase mb-2">Mission</h4>
              <h3 className="text-3xl font-bold mb-4">Feed communities with care</h3>
              <p className="text-gray-600 mb-6">
                Our mission is to produce nutritious food while protecting ecosystems and empowering smallholders.
              </p>
              <a href="#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                Partner With Us
              </a>
            </div>

            <div>
              <h4 className="text-green-600 font-semibold uppercase mb-2">Vision</h4>
              <h3 className="text-3xl font-bold mb-4">A future where agriculture restores</h3>
              <p className="text-gray-600">
                We envision systems that regenerate land, nourish people and inspire the next generation of farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
          <Testimonial />
          <Footer />
    </main>
  )
}