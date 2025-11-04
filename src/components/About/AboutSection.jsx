'use client'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Decorative Leaf Pattern at Bottom */}
      <div 
        className="absolute bottom-0 -left-40 w-full h-50 bg-[url('/images/pattern-2.png')] bg-no-repeat bg-bottom  pointer-events-none"
      ></div>

      <div className="relative container mx-auto px-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-green-600 font-semibold uppercase mb-2">About Us</h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Leader in <span className="text-green-600">Agriculture</span> Market
          </h2>
          <p className="text-gray-600 mb-8">
            We are pioneers in the organic agriculture industry, delivering high-quality 
            products cultivated through eco-friendly and sustainable practices.  
            Our mission is to connect people to nature through healthy food.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Image Content */}
        <motion.div 
          className="relative flex gap-6"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/about-1.jpg" 
            alt="Farming" 
            className="rounded-2xl shadow-lg w-1/2 h-[400px] object-cover"
          />
          <img 
            src="/images/about-2.jpg" 
            alt="Organic farm" 
            className="rounded-2xl shadow-lg w-1/2 h-[500px] object-cover mt-10"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection