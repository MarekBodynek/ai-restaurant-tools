"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const step = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const stats = [
  { value: 54, suffix: "+", label: "AI Tools", icon: "🛠️" },
  { value: 10, suffix: "", label: "Categories", icon: "📂" },
  { value: 60, suffix: "K+", label: "Restaurants Served", icon: "🍽️" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
];

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8">
      <div className="container-wide mx-auto">
        <div className="glass-card rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const { count, ref } = useCountUp(stat.value, 2000 + index * 200);

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        ref={ref}
        className="text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="text-3xl mb-2"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {stat.icon}
        </motion.div>
        <div className="text-3xl sm:text-4xl font-bold text-navy-800">
          {count}
          {stat.suffix}
        </div>
        <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
      </motion.div>
    </AnimatedSection>
  );
}
