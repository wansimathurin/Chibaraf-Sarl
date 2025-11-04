import AboutSection from "@/components/About/AboutSection";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServiceSection/ServiceSection";
import Team from "@/components/TeamSection/TeamSection";
import OfferSection from "@/components/WhatWeOffer/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Hero />
      <AboutSection />
      <OfferSection />
      <ServicesSection />
      <Team />
      <Footer />
    </div>
  );
}
