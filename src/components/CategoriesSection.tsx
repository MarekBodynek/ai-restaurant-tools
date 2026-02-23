"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCategories } from "@/lib/tools";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const categoryImages: Record<string, string> = {
  Chatbots:
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&q=80",
  Reservations:
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80",
  "Menu AI":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  Inventory:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  Marketing:
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80",
  POS: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  Delivery:
    "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80",
  Kitchen:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80",
  Analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
};

export function CategoriesSection() {
  const categories = getCategories();

  return (
    <section id="categories" className="section-padding bg-stone-50/80">
      <div className="container-wide mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Browse by Category
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-3 mb-4">
              Find the Right AI for Your Needs
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              From front-of-house to kitchen operations, explore AI solutions
              organized by what they do best.
            </p>
          </div>
        </AnimatedSection>

        {/* Category cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <StaggerItem key={category.name}>
              <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link
                  href="/#tools"
                  className="group block bg-white rounded-2xl border border-stone-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  {categoryImages[category.name] && (
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={categoryImages[category.name]}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {/* Floating icon badge */}
                      <div
                        className={`absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-lg shadow-lg`}
                      >
                        {category.icon}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-navy-800 group-hover:text-orange-500 transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                        {category.count} tools
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
