"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
  const t = useTranslations("team");

  const teamMembers = [
    {
      id: 1,
      name: t("members.ceo.name"),
      role: t("members.ceo.role"),
      image: "/images/team2.jpg",
    },
    {
      id: 2,
      name: t("members.operations.name"),
      role: t("members.operations.role"),
      image: "/images/team4.jpg",
    },
    {
      id: 3,
      name: t("members.agronomy.name"),
      role: t("members.agronomy.role"),
      image: "/images/team3.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h4 className="text-green-600 font-semibold uppercase mb-2">
            {t("tagline")}
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-green-400">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
