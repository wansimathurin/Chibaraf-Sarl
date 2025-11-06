'use client'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white relative overflow-hidden">
      {/* Background Leaf Pattern */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 bg-[url('/images/leaf-pattern.png')] bg-bottom bg-repeat-x opacity-10"
      />

      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 relative z-10">
        {/* Logo & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Chibaraf SARL</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Chibaraf SARL cultivates, produces, and distributes high-quality 
            agricultural products. We’re dedicated to sustainable farming and 
            to sharing the best of West Africa’s produce with the world.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href="home" className="hover:text-white transition">Home</Link></li>
            <li><Link href="about" className="hover:text-white transition">About</Link></li>
            <li><Link href="services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16}/> Douala, Cameroon</li>
            <li className="flex items-center gap-2"><Mail size={16}/> contact@chibaraf.com</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +237 6 71 23 45 67</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-400"><Facebook size={20}/></a>
            <a href="#" className="hover:text-green-400"><Instagram size={20}/></a>
            <a href="#" className="hover:text-green-400"><Linkedin size={20}/></a>
            <a href="#" className="hover:text-green-400"><MessageCircle size={20}/></a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-green-950 py-4 text-center text-gray-400 text-sm border-t border-green-800">
        © {new Date().getFullYear()} Chibaraf SARL — All rights reserved.
      </div>
    </footer>
  )
}

export default Footer