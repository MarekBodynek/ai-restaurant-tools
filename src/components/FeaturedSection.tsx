"use client";

import Link from "next/link";
import { getFeaturedTools } from "@/lib/tools";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

const badges = ["Editor's Pick", "Most Popular", "Trending"];

export function FeaturedSection() {
  const featured = getFeaturedTools();

  return (
    <section id="featured" className="section-padding">
      <div className="container-wide mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Editor&apos;s Choice
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-3 mb-4">
            Top Picks for Your Restaurant
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Hand-picked by our team — the AI tools that deliver the most
            impact for restaurant owners.
          </p>
        </div>

        {/* Featured cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((tool, i) => (
            <StaggerItem key={tool.slug}>
              <Link
                href={`/tools/${tool.slug}`}
                className="group relative block rounded-2xl overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 opacity-95" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500" />

                {/* Content */}
                <div className="relative p-8 sm:p-10">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-6">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {badges[i]}
                  </span>

                  {/* Icon */}
                  <div className="text-5xl mb-6">{tool.icon}</div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Category + Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {tool.category}
                    </span>
                    <span className="text-sm font-semibold text-orange-400">
                      {tool.price}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-stone-500 group-hover:text-orange-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
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
