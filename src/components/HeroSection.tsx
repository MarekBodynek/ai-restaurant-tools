"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80",
  },
  {
    heading: "Boost Revenue with AI-Powered POS Systems",
    description:
      "Smart point-of-sale systems that learn your business patterns and optimize pricing, inventory, and customer experience.",
    cta: "Explore POS Tools",
    href: "#tools?category=POS",
    image:
      "https://images.unsplash.com/photo-1758519289714-519a9d9b96e3?w=1920&q=80",
  },
  {
    heading: "Automate Marketing & Customer Engagement",
    description:
      "From personalized email campaigns to AI chatbots, engage your customers like never before.",
    cta: "Marketing Tools",
    href: "#tools?category=Marketing",
    image:
      "https://images.unsplash.com/photo-1564758596018-3e5b1f2340cc?w=1920&q=80",
  },
  {
    heading: "Streamline Operations from Kitchen to Front of House",
    description:
      "Reduce waste, optimize staffing, and improve efficiency with intelligent operations tools.",
    cta: "Operations Tools",
    href: "#tools?category=Kitchen",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1920&q=80",
  },
  {
    heading: "Smart Reservations & Customer Management",
    description:
      "AI-driven reservation systems and CRM tools that maximize table turnover and build lasting guest relationships.",
    cta: "Reservation Tools",
    href: "#tools?category=Reservations",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&q=80",
  },
  {
    heading: "AI-Powered Analytics & Business Intelligence",
    description:
      "Turn your restaurant data into actionable insights — from sales forecasting to menu engineering and labor optimization.",
    cta: "Analytics Tools",
    href: "#tools?category=Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  },
];

const kenBurnsVariants = [
  "ken-burns-zoom-in-left",
  "ken-burns-zoom-in-right",
  "ken-burns-zoom-out-center",
  "ken-burns-zoom-in-center",
];

const SLIDE_DURATION = 5000;

export function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressAnimations = useRef<Map<number, Animation>>(new Map());

  const startProgressAnimation = useCallback((index: number) => {
    progressAnimations.current.forEach((anim) => anim.cancel());
    progressAnimations.current.clear();

    const container = progressRef.current;
    if (!container) return;

    const bars = container.querySelectorAll<HTMLElement>(
      "[data-progress-bar]"
    );
    const bar = bars[index];
    if (!bar) return;

    const animation = bar.animate([{ width: "0%" }, { width: "100%" }], {
      duration: SLIDE_DURATION,
      easing: "linear",
      fill: "forwards",
    });

    progressAnimations.current.set(index, animation);
  }, []);

  const advanceTo = useCallback((newIndex: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setSelectedIndex(newIndex);
      requestAnimationFrame(() => setTextVisible(true));
    }, 200);
  }, []);

  // Auto-advance slides — resumes when tab regains focus
  useEffect(() => {
    startProgressAnimation(selectedIndex);

    let interval = setInterval(() => {
      advanceTo((selectedIndex + 1) % slides.length);
    }, SLIDE_DURATION);

    const handleVisibility = () => {
      clearInterval(interval);
      if (document.visibilityState === "visible") {
        advanceTo((selectedIndex + 1) % slides.length);
        interval = setInterval(() => {
          advanceTo((selectedIndex + 1) % slides.length);
        }, SLIDE_DURATION);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [selectedIndex, startProgressAnimation, advanceTo]);

  const goTo = useCallback(
    (index: number) => {
      advanceTo(index);
    },
    [advanceTo]
  );

  return (
    <section
      aria-label="Hero carousel"
      className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden z-0"
    >
      {/* Crossfade slides — all stacked absolutely */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            opacity: selectedIndex === index ? 1 : 0,
            zIndex: selectedIndex === index ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        >
          <div
            className={`absolute inset-0 ${kenBurnsVariants[index % kenBurnsVariants.length]}`}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[11] bg-gradient-to-b from-black/60 via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 z-[11] bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />

      {/* Content layer */}
      <div className="relative z-20 h-full flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] tracking-normal mb-4 md:mb-6 ${
                textVisible ? "hero-text-active" : "hero-text-enter"
              }`}
            >
              {slides[selectedIndex].heading}
            </h1>

            <p
              className={`font-body text-sm sm:text-base md:text-xl text-stone-200 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed ${
                textVisible ? "hero-text-active" : "hero-text-enter"
              }`}
              style={{ transitionDelay: textVisible ? "0.1s" : "0s" }}
            >
              {slides[selectedIndex].description}
            </p>

            <div
              className={`pointer-events-auto ${
                textVisible ? "hero-text-active" : "hero-text-enter"
              }`}
              style={{ transitionDelay: textVisible ? "0.2s" : "0s" }}
            >
              <Link
                href={slides[selectedIndex].href}
                className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25 text-sm md:text-base"
              >
                {slides[selectedIndex].cta}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar indicators */}
      <div
        ref={progressRef}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[15] flex items-center gap-1.5 md:gap-2 w-[min(280px,60vw)] md:w-[320px]"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative flex-1 h-1 rounded-full bg-white/25 overflow-hidden cursor-pointer hover:bg-white/35 transition-colors"
          >
            <div
              data-progress-bar
              className="absolute inset-y-0 left-0 bg-orange-500 rounded-full"
              style={{ width: selectedIndex === index ? undefined : "0%" }}
            />
          </button>
        ))}
      </div>

      {/* Bottom gradient fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fefce8] via-[#fefce8]/60 to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
