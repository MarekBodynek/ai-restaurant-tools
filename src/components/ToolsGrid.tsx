"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { tools, getCategories } from "@/lib/tools";
import { Tool } from "@/lib/types";
import { AnimatedSection } from "./AnimatedSection";

export function ToolsGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(() => getCategories(), []);

  const filtered = useMemo(() => {
    let result: Tool[] = tools;
    if (activeCategory !== "All") {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, activeCategory]);

  return (
    <section id="tools" className="section-padding">
      <div className="container-wide mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Complete Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-3 mb-4">
              All AI Tools
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Browse our full collection of AI-powered restaurant tools. Search
              by name or filter by category.
            </p>
          </div>
        </AnimatedSection>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search tools by name, category, or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 text-sm transition-all"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
              activeCategory === "All"
                ? "bg-navy-800 text-white shadow-lg"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            All ({tools.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat.name
                  ? "bg-navy-800 text-white shadow-lg"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat.icon} {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-stone-400 mb-6">
          Showing {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-stone-500 text-lg">
              No tools found matching your search.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="hover:-translate-y-1 transition-transform duration-300 h-full"
    >
      <Link
        href={`/tools/${tool.slug}`}
        className="group block h-full p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-lg shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-200/50 transition-all duration-300 relative overflow-hidden min-h-[220px]"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5" />

        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <span
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center text-2xl border border-stone-100 group-hover:border-orange-200 group-hover:shadow-md group-hover:shadow-orange-500/10 transition-all"
            >
              {tool.icon}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-navy-800 group-hover:text-orange-500 transition-colors truncate">
                {tool.name}
              </h3>
              <span className="text-xs text-stone-400">{tool.category}</span>
            </div>
          </div>
          <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
            {tool.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-stone-100/80">
            <span className="text-sm font-medium text-orange-500">
              {tool.price}
            </span>
            <span className="text-xs text-stone-400 group-hover:text-orange-400 transition-colors flex items-center gap-1">
              View details
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
