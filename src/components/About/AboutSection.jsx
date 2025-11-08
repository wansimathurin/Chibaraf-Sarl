"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <Image
                src="/images/about-1.jpg"
                alt={t("title")}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] mt-8">
              <Image
                src="/images/about-2.jpg"
                alt={t("title")}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <span className="block text-3xl font-bold text-green-600 mb-2">
                {t("stats.years.number")}
              </span>
              <span className="text-gray-600">{t("stats.years.label")}</span>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <span className="block text-3xl font-bold text-green-600 mb-2">
                {t("stats.farmers.number")}
              </span>
              <span className="text-gray-600">{t("stats.farmers.label")}</span>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <span className="block text-3xl font-bold text-green-600 mb-2">
                {t("stats.hectares.number")}
              </span>
              <span className="text-gray-600">{t("stats.hectares.label")}</span>
            </div>

            <div className="flex items-center justify-center p-6 rounded-2xl bg-gray-50">
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {t("cta.primary")}
                </h4>
                <p className="text-sm text-gray-600">{t("cta.secondary")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
