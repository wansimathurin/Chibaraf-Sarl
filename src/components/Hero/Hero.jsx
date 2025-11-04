
'use client'
import React from "react";

const Hero = () => {
    const handleScroll = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="relative h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/2.png"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Natural Products <br className="hidden sm:block" />for  Lovers of <strong className="text-primary"> Healthy</strong> <br className="hidden sm:block" /> Organic Food
        </h1>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Discover nature’s best — made with love and crafted for your wellbeing.
        </p>
                <button
          onClick={handleScroll}
          className="bg-primary hover:bg-primary/90 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg cursor-pointer"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Hero;
