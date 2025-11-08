"use client";

import AboutBanner from "@/components/About/AboutBanner";
import AboutSection from "@/components/About/AboutSection";
import CreativeProcess from "@/components/About/CreativeProcess";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";
import { useTranslations } from "next-intl";

export default function AboutPageClient() {
  const t = useTranslations("about");

  return (
    <main>
      <AboutBanner />
      <AboutSection />
      <CreativeProcess />

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Mission */}
            <div>
              <h4 className="text-green-600 font-semibold uppercase mb-2">
                {t("missionTitle")}
              </h4>
              <h3 className="text-3xl font-bold mb-4">
                {t("missionHeading")}
              </h3>
              <p className="text-gray-600 mb-6">{t("missionText")}</p>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                {t("missionButton")}
              </a>
            </div>

            {/* Vision */}
            <div>
              <h4 className="text-green-600 font-semibold uppercase mb-2">
                {t("visionTitle")}
              </h4>
              <h3 className="text-3xl font-bold mb-4">
                {t("visionHeading")}
              </h3>
              <p className="text-gray-600">{t("visionText")}</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </main>
  );
}