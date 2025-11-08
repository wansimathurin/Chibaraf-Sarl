"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import ServicesSection from "@/components/ServiceSection/ServiceSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";

export default function ServicesPageClient() {
  const t = useTranslations("services");

  return (
    <main>
      {/* Hero */}
      <header className="relative pt-30 h-full md:min-h-[56vh] flex items-center bg-gradient-to-br from-green-600/30 via-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-5 md:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-block bg-white/60 backdrop-blur-sm text-green-800 px-3 py-1 rounded-full text-sm mb-4">
              {t("hero.badge")}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              {t("hero.text")}
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
              >
                {t("hero.ctaPrimary")}
              </Link>
              <a
                href="#deep-dive"
                className="inline-block text-green-800 underline"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>

          {/* visual badges */}
          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            {["production", "storage", "transformation", "exportation"].map((key) => (
              <span
                key={key}
                className="px-4 py-2 rounded-full bg-white shadow text-sm"
              >
                {t(`badges.${key}`)}
              </span>
            ))}
          </div>
        </div>

        {/* decorative shapes */}
        <div className="absolute -right-28 top-8 w-72 h-72 rounded-full bg-white/10 blur-xl pointer-events-none will-change-transform" />
        <div className="absolute -left-48 bottom-0 w-96 h-96 rounded-t-full bg-green-50/80 pointer-events-none will-change-transform" />
      </header>

      {/* Animated overview cards */}
      <ServicesSection />

      {/* Deep dive */}
      <section id="deep-dive" className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-green-600 font-semibold uppercase mb-2">
              {t("deepDive.subtitle")}
            </h4>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              {t("deepDive.title")}
            </h2>
            <p className="text-gray-600 mt-4">{t("deepDive.text")}</p>
          </div>

          {/* Sections */}
          {["production", "storage", "transformation", "exportation"].map((key) => {
            const content = t.raw(`sections.${key}`);
            const reversed = key === "storage" || key === "exportation";
            return (
              <div
                key={key}
                className={`grid md:grid-cols-2 gap-8 items-center mb-12 ${
                  reversed ? "" : ""
                }`}
              >
                {!reversed && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {content.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{content.text}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {content.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover max-w-full"
                  />
                </div>
                {reversed && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {content.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{content.text}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {content.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-5 md:px-20 text-center">
          <h3 className="text-2xl font-bold mb-4">{t("cta.title")}</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            {t("cta.text")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </main>
  );
}