"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/tools";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const categoryImages: Record<string, string> = {
  Chatbots:
    "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&q=80", // customer on phone chatting
  Reservations:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", // restaurant tables set up for reservations
  "Menu AI":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", // beautiful plated dish
  Inventory:
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&q=80", // organized food ingredients storage
  Marketing:
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80", // social media on phone
  POS: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80", // POS terminal payment
  Delivery:
    "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80", // food delivery packaging
  Kitchen:
    "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80", // professional kitchen with chef
  Analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", // dashboard with charts on screen
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
              <div className="hover-lift">
                <Link
                  href="/#tools"
                  className="group block bg-white rounded-2xl border border-stone-100 hover:border-orange-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
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
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
