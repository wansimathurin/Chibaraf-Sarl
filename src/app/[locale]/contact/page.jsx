'use client'
import { useTranslations } from "next-intl";
import ContactForm from "@/components/Contact/ContactForm";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="antialiased">
      {/* Hero */}
      <header className="relative pt-30 h-[80vh] md:h-full md:min-h-[56vh] flex items-center bg-[url('/images/contact-page.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="container mx-auto px-5 md:px-20 relative z-10 text-white text-center">
          <p className="inline-block bg-green-700/20 px-3 py-1 rounded-full text-sm mb-4">
            {t("hero.tagline")}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {t("hero.title")}
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            {t("hero.subtitle")}
          </p>
        </div>
      </header>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 md:px-20 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div>
            <div className="mb-6">
              <h4 className="text-green-600 font-semibold uppercase mb-2">
                {t("form.section.title")}
              </h4>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {t("form.section.heading")}
              </h2>
              <p className="text-gray-600 mt-3">
                {t("form.section.description")}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <ContactForm />
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>{t("form.response.time")}</strong>{" "}
              {t("form.response.note")}
            </div>
          </div>

          {/* Right: Contact details + map */}
          <aside className="space-y-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                {t("details.title")}
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li>
                  <span className="block text-sm text-gray-500">
                    {t("details.phone")}
                  </span>
                  <a
                    href="tel:+2376567890"
                    className="text-green-700 font-medium"
                  >
                    +(237)6567-890
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-gray-500">
                    {t("details.email")}
                  </span>
                  <a
                    href="mailto:hello@chibaraf.com"
                    className="text-green-700 font-medium"
                  >
                    hello@chibaraf.com
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-gray-500">
                    {t("details.office")}
                  </span>
                  <address className="not-italic text-gray-700">
                    {t("details.address")}
                  </address>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border">
              <iframe
                title={`Chibaraf location - ${t("details.address")}`}
                src="https://www.google.com/maps?q=Douala+Cameroon&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                {t("details.hours.title")}
              </h3>
              <p className="text-gray-700">{t("details.hours.weekdays")}</p>
              <p className="text-gray-700">{t("details.hours.saturday")}</p>
            </div>
          </aside>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </main>
  );
}
