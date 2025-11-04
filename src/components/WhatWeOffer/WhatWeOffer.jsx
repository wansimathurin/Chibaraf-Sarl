'use client'
import { motion } from 'framer-motion'

const offers = [
  {
    id: 1,
    title: 'Agriculture Products',
    desc: 'Providing top-quality crops and fresh produce from eco-friendly farms.',
    icon: '/icons/agriculture.png',
  },
  {
    id: 2,
    title: 'Organic Products',
    desc: 'We deliver organic fruits and vegetables grown without harmful chemicals.',
    icon: '/icons/organic.png',
  },
  {
    id: 3,
    title: 'Dairy Products',
    desc: 'Our fresh milk and dairy products are sourced from healthy local farms.',
    icon: '/icons/dairy.png',
  },
]

const OfferSection = () => {
  return (
    <section id="offers" className="relative py-20 bg-[#F7F6EF] overflow-hidden">
      {/* Decorative leaf pattern at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[url('/images/pattern.png')] bg-repeat-x bg-bottom  pointer-events-none"></div>

      <div className="container mx-auto px-10 lg:px-20 text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-green-600 font-semibold uppercase mb-2">What We Offer</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Quality <span className="text-green-600">Agriculture</span> Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We provide a wide range of natural and organic agricultural products carefully 
            cultivated to ensure freshness, sustainability, and quality.
          </p>
        </motion.div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-5 bg-primary p-2 w-[50px] h-[50px] rounded-full items-center mx-auto">
                <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferSection