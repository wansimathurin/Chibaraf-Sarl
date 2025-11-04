"use client"
import { motion } from "framer-motion"

const team = [
  {
    name: "Jean-Baptiste Nkom",
    role: "Founder & CEO",
    image: "/images/team1.jpg",
  },
  {
    name: "Clarisse Ndongo",
    role: "Head of Production",
    image: "/images/team2.jpg",
  },
  {
    name: "Daniel Mvondo",
    role: "Logistics & Export Manager",
    image: "/images/team3.jpg",
  },
  {
    name: "Marie Chantal",
    role: "Quality Control Supervisor",
    image: "/images/team4.jpg",
  },
]

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          Meet Our Team
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          At Chibaraf SARL, our success begins with people. Meet the experts 
          dedicated to cultivating, processing, and delivering high-quality agricultural products.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-green-700">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team