'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Sun, Users } from 'lucide-react'

export default function CreativeProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5 md:px-20 text-center">
        <h4 className="text-green-600 font-semibold uppercase mb-2">Our Approach</h4>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
          Creativity meets responsibility
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-gray-50 shadow-sm"
          >
            <div className="flex items-center justify-center mb-4 text-green-600">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                <Sun size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Regenerative Farming</h3>
            <p className="text-gray-600">Techniques that restore soil, increase biodiversity and yield healthier produce.</p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-gray-50 shadow-sm"
          >
            <div className="flex items-center justify-center mb-4 text-green-600">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                <Activity size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovative Ideas</h3>
            <p className="text-gray-600">We blend tradition with innovation to design solutions that scale sustainably.</p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 rounded-2xl bg-gray-50 shadow-sm"
          >
            <div className="flex items-center justify-center mb-4 text-green-600">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                <Users size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Community First</h3>
            <p className="text-gray-600">We work with local partners and customers to build resilient food systems.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}