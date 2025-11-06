import ServicesSection from "@/components/ServiceSection/ServiceSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export const metadata = {
  title: "Services — Chibaraf",
  description:
    "Production, Storage, Transformation and Exportation — Chibaraf supports the full agricultural value chain with quality and care.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <header className="relative min-h-[56vh] flex items-center bg-gradient-to-br from-green-600/30 via-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-5 md:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-block bg-white/60 backdrop-blur-sm text-green-800 px-3 py-1 rounded-full text-sm mb-4">
              End‑to‑end agriculture services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              From seed to shipment — built on quality, traceability and impact
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Chibaraf provides hands‑on production support, secure storage,
              value‑adding transformation and reliable exportation — designed to
              grow farm incomes and assure buyers.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
              >
                Work with Chibaraf
              </Link>
              <a
                href="#deep-dive"
                className="inline-block text-green-800 underline"
              >
                Read the details
              </a>
            </div>
          </div>

          {/* visual badges */}
          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-white shadow text-sm">
              Production
            </span>
            <span className="px-4 py-2 rounded-full bg-white shadow text-sm">
              Storage
            </span>
            <span className="px-4 py-2 rounded-full bg-white shadow text-sm">
              Transformation
            </span>
            <span className="px-4 py-2 rounded-full bg-white shadow text-sm">
              Exportation
            </span>
          </div>
        </div>

        {/* decorative shapes */}
        <div className="absolute -right-28 top-8 w-72 h-72 rounded-full bg-white/10 blur-xl pointer-events-none will-change-transform" />
        <div className="absolute -left-48 bottom-0 w-96 h-96 rounded-t-full bg-green-50/80 pointer-events-none will-change-transform" />
      </header>

      {/* Animated overview cards (client component) */}
      <ServicesSection />

      {/* Deep dive: detailed explanations */}
      <section id="deep-dive" className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-green-600 font-semibold uppercase mb-2">
              Deep Dive
            </h4>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              What each service means for farmers and buyers
            </h2>
            <p className="text-gray-600 mt-4">
              Practical descriptions and outcomes — so partners know exactly
              what Chibaraf delivers at each stage of the value chain.
            </p>
          </div>

          {/* Production */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Production</h3>
              <p className="text-gray-700 mb-4">
                We support nursery management, planting schedules, integrated
                pest management and harvest optimization. Our agronomists work
                side‑by‑side with producers to increase yield, improve quality
                and adopt regenerative practices.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Seedling and transplant management</li>
                <li>Crop calendars and rotation planning</li>
                <li>On‑farm advisory and quality checkpoints</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="/images/about-2.jpg"
                alt="Production"
                className="w-full h-full object-cover max-w-full"
              />
            </div>
          </div>

          {/* Storage */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="/images/service-storage.jpg"
                alt="Storage"
                className="w-full h-full object-cover max-w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-3">Storage</h3>
              <p className="text-gray-700 mb-4">
                Post‑harvest handling and modern storage reduce loss and protect
                value. We provide temperature‑aware handling, pest control and
                traceable storage systems.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Secure, humidity‑controlled storage</li>
                <li>Inventory & traceability systems</li>
                <li>Post‑harvest training for handlers</li>
              </ul>
            </div>
          </div>

          {/* Transformation */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Transformation</h3>
              <p className="text-gray-700 mb-4">
                We add value on site through processing units that convert raw
                agricultural goods into market‑ready products. That means better
                margins for producers and reliable product specs for buyers.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Quality‑controlled processing</li>
                <li>Packaging to buyer specifications</li>
                <li>Hygiene and food‑safety protocols</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="/images/service-processing.jpg"
                alt="Transformation"
                className="w-full h-full object-cover max-w-full"
              />
            </div>
          </div>

          {/* Exportation */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="/images/service-export.jpg"
                alt="Exportation"
                className="w-full h-full object-cover max-w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-3">Exportation</h3>
              <p className="text-gray-700 mb-4">
                We manage export logistics, compliance and buyer relations —
                ensuring products meet destination regulations and arrive in
                excellent condition.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Export documentation & compliance</li>
                <li>Cold chain coordination for perishables</li>
                <li>Long‑term buyer relationships & contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-5 md:px-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to engage?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Tell us which service you need and we'll propose a clear plan and
            pricing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Request a proposal
          </Link>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </main>
  );
}
