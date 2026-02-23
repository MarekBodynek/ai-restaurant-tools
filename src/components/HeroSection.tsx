"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-restaurant.png"
        alt="Modern restaurant interior"
        fill
        className="object-cover object-center scale-105"
        priority
        sizes="100vw"
      />

      {/* Multi-layer dark overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-navy-900/30" />

      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, rgba(217,119,6,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(217,119,6,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-stone-300 backdrop-blur-md mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            54+ AI Tools Curated for Restaurants
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto mb-6"
        >
          The AI Tools That Power{" "}
          <span className="relative inline-block">
            <span className="gradient-text">Modern Restaurants</span>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 8C50 3 100 2 150 4C200 6 250 3 298 7"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <defs>
                <linearGradient
                  id="underline-gradient"
                  x1="0"
                  y1="0"
                  x2="300"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Discover, compare, and choose from the most comprehensive collection
          of AI-powered tools — from reservations to kitchen robotics.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#tools"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
          >
            Explore All Tools
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
          <Link
            href="#categories"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            Browse Categories
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-stone-400"
        >
          {["Free to browse", "Updated weekly", "Expert curated"].map(
            (text) => (
              <span key={text} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {text}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Bottom fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fefce8] via-[#fefce8]/80 to-transparent" />
    </section>
  );
}
