"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function AboutBanner() {
  return (
    <header className="relative h-[60vh] md:h-[70vh] bg-[url('/images/about-1.jpg')] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="container mx-auto px-5 md:px-20 relative z-10 text-center text-white">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Inspiring Sustainable Agriculture
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-6"
        >
          We cultivate ideas and fields — connecting people to nature with
          creativity, responsible practices and bold innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Learn Our Story
          </a>
          <Link href="contact" className="text-white/90 underline">
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* decorative wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C360,120 1080,0 1440,64 L1440 120 L0 120 Z"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>
    </header>
  );
}
