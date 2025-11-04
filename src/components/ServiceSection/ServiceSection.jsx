'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Production',
    desc: 'From seedlings to harvest, we manage every step with care to deliver high-quality, sustainable crops.',
    image: '/images/about-2.jpg',
  },
  {
    id: 2,
    title: 'Storage',
    desc: 'We provide safe and modern facilities for the preservation of raw products after harvest.',
    image: '/images/service-storage.jpg',
  },
  {
    id: 3,
    title: 'Transformation',
    desc: 'Our transformation units turn raw materials into finished products ready for consumption.',
    image: '/images/service-processing.jpg',
  },
  {
    id: 4,
    title: 'Exportation',
    desc: 'We proudly export agricultural products across West Africa — and soon to Europe.',
    image: '/images/service-export.jpg',
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Leaf Pattern */}
      <div className="absolute bottom-0 -left-120 w-full h-full bg-[url('/images/pattern-3.png')] bg-no-repeat bg-bottom  pointer-events-none"></div>

      <div className="relative container mx-auto px-6 lg:px-20 text-center z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-green-600 font-semibold uppercase mb-2">Our Services</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-green-600">Chibaraf SARL</span> Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            From the soil to your table — Chibaraf SARL covers every step of the agricultural process 
            with quality, passion, and commitment to sustainability.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{service.desc}</p>

                  {/* Call to Action */}
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-green-400 hover:text-white transition font-semibold"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection