"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonial = () => {
  const t = useTranslations("testimonials");
  const testimonials = t.raw("items");
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 md:px-20">
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-semibold uppercase mb-2">
            {t("tagline")}
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {t("title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                "{active.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                  {active.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {active.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      — {active.role}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < active.rating ? "text-amber-400" : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
