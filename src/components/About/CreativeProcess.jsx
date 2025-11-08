"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sun, Activity, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CreativeProcess() {
  const t = useTranslations("about");

  const items = [
    {
      id: "regenerative",
      icon: <Sun size={20} />,
      title: t("process.items.regenerative.title"),
      desc: t("process.items.regenerative.desc"),
    },
    {
      id: "innovation",
      icon: <Activity size={20} />,
      title: t("process.items.innovation.title"),
      desc: t("process.items.innovation.desc"),
    },
    {
      id: "community",
      icon: <Users size={20} />,
      title: t("process.items.community.title"),
      desc: t("process.items.community.desc"),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5 md:px-20 text-center">
        <h4 className="text-green-600 font-semibold uppercase mb-2">
          {t("process.tagline") ?? "Our Approach"}
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
          {t("process.title") ?? "Creativity meets responsibility"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + i * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 shadow-sm"
            >
              <div className="flex items-center justify-center mb-4 text-green-600">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                  {it.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
