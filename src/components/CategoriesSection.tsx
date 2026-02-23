"use client";

import Link from "next/link";
import { getCategories } from "@/lib/tools";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

export function CategoriesSection() {
  const categories = getCategories();

  return (
    <section id="categories" className="section-padding bg-gray-50/80">
      <div className="container-wide mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Browse by Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-3 mb-4">
            Find the Right AI for Your Needs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
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
                className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
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
                      <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                        {category.count} tools
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {category.description}
                    </p>
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
