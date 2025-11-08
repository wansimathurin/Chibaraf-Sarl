"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const t = useTranslations("services");

  const services = [
    {
      id: 1,
      title: t("items.production.title"),
      desc: t("items.production.desc"),
      image: "/images/about-2.jpg",
    },
    {
      id: 2,
      title: t("items.storage.title"),
      desc: t("items.storage.desc"),
      image: "/images/service-storage.jpg",
    },
    {
      id: 3,
      title: t("items.transformation.title"),
      desc: t("items.transformation.desc"),
      image: "/images/service-processing.jpg",
    },
    {
      id: 4,
      title: t("items.export.title"),
      desc: t("items.export.desc"),
      image: "/images/service-export.jpg",
    },
  ];

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
          <h4 className="text-green-600 font-semibold uppercase mb-2">
            {t("tagline")}
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {t("description")}
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
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
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
  );
};

export default ServicesSection;
