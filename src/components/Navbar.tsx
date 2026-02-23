"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-800/90 backdrop-blur-xl border-b border-white/10">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size={36} />
            <span className="text-xl font-bold text-white tracking-tight">
              Restaurant<span className="text-orange-500">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#tools"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/#categories"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/#tools"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-300 hover:text-white py-2"
              >
                Tools
              </Link>
              <Link
                href="/#categories"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-300 hover:text-white py-2"
              >
                Categories
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-300 hover:text-white py-2"
              >
                Blog
              </Link>
              <Link
                href="/#newsletter"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
