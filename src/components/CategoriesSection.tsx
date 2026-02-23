"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/tools";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

const categoryImages: Record<string, string> = {
  Chatbots: "photo-1577563908411-5077b6dc7624",
  Reservations: "photo-1466978913421-dad2ebd01d17",
  "Menu AI": "photo-1504674900247-0877df9cc836",
  Inventory: "photo-1556909114-f6e7ad7d3136",
  Marketing: "photo-1432888622747-4eb9a8efeb07",
  POS: "photo-1556742049-0cfed4f6a45d",
  Delivery: "photo-1526367790999-0150786686a2",
  Kitchen: "photo-1556910103-1c02745aae4d",
  Analytics: "photo-1551288049-bebda4e38f71",
};

export function CategoriesSection() {
  const categories = getCategories();

  return (
    <section id="categories" className="section-padding bg-stone-50/80">
      <div className="container-wide mx-auto">
        {/* Section header */}
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

        {/* Category cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <StaggerItem key={category.name}>
              <Link
                href={`/#tools`}
                className="group block bg-white rounded-2xl border border-stone-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {categoryImages[category.name] && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={`https://images.unsplash.com/${categoryImages[category.name]}?w=400&q=80`}
                      alt={category.name}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-navy-800 group-hover:text-orange-500 transition-colors">
                          {category.name}
                        </h3>
                        <span className="text-xs font-medium text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                          {category.count} tools
                        </span>
                      </div>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
