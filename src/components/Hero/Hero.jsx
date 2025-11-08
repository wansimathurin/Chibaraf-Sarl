"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("hero");

  const handleScroll = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/2.png"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-5 md:px-20 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          {t("subtitle")}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            {t("cta.primary")}
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            {t("cta.secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
