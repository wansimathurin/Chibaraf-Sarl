"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sprout, Warehouse, Factory, Ship } from "lucide-react";

const OfferSection = () => {
  const t = useTranslations("offers");

const offerings = [
  {
    id: 1,
    icon: <Sprout className="w-6 h-6" />,
    title: t("items.farming.title"),
    description: t("items.farming.desc"),
  },
  {
    id: 2,
    icon: <Warehouse className="w-6 h-6" />,
    title: t("items.storage.title"),
    description: t("items.storage.desc"),
  },
  {
    id: 3,
    icon: <Factory className="w-6 h-6" />,
    title: t("items.processing.title"),
    description: t("items.processing.desc"),
  },
  {
    id: 4,
    icon: <Ship className="w-6 h-6" />,
    title: t("items.export.title"),
    description: t("items.export.desc"),
  },
];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-semibold uppercase mb-2">
            {t("tagline")}
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                {offer.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
