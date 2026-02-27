"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    heading: "Discover the Best AI Tools for Restaurants",
    description:
      "Browse our curated collection of 54+ AI-powered tools designed to transform every aspect of your restaurant business.",
    cta: "Browse Tools",
    href: "#tools",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  },
  {
    heading: "Boost Revenue with AI-Powered POS Systems",
    description:
      "Smart point-of-sale systems that learn your business patterns and optimize pricing, inventory, and customer experience.",
    cta: "Explore POS Tools",
    href: "/category/pos-systems",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
  },
  {
    heading: "Automate Marketing & Customer Engagement",
    description:
      "From personalized email campaigns to AI chatbots, engage your customers like never before.",
    cta: "Marketing Tools",
    href: "/category/marketing",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80",
  },
  {
    heading: "Streamline Operations from Kitchen to Front of House",
    description:
      "Reduce waste, optimize staffing, and improve efficiency with intelligent operations tools.",
    cta: "Operations Tools",
    href: "/category/operations",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Hero carousel"
      className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: current === index ? 1 : 0 }}
          aria-hidden={current !== index}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ease-in-out"
              style={{
                opacity: current === index ? 1 : 0,
                pointerEvents: current === index ? "auto" : "none",
              }}
              aria-hidden={current !== index}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                  key={`heading-${index}-${current === index}`}
                  {...(current === index ? fadeUp(0) : {})}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                >
                  {slide.heading}
                </motion.h1>

                <motion.p
                  key={`desc-${index}-${current === index}`}
                  {...(current === index ? fadeUp(0.15) : {})}
                  className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  key={`cta-${index}-${current === index}`}
                  {...(current === index ? fadeUp(0.3) : {})}
                >
                  <Link
                    href={slide.href}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    {slide.cta}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-orange-500"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Bottom gradient fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fefce8] via-[#fefce8]/60 to-transparent z-10" />
    </section>
  );
}
