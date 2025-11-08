import AboutSection from "@/components/About/AboutSection";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServiceSection/ServiceSection";
import Team from "@/components/TeamSection/TeamSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import OfferSection from "@/components/WhatWeOffer/WhatWeOffer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Hero />
      <AboutSection />
      <OfferSection />
      <ServicesSection />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}
