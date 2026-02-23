"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/#tools", label: "Tools" },
  { href: "/#categories", label: "Categories" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-800/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-navy-800/80 backdrop-blur-xl"
      } border-b border-white/10`}
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Logo size={36} />
            </motion.div>
            <span className="text-xl font-bold text-white tracking-tight">
              Restaurant<span className="text-orange-500">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-stone-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-stone-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="block h-0.5 w-6 bg-current origin-center transition-colors"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { opacity: 0, x: -10 }
                    : { opacity: 1, x: 0 }
                }
                className="block h-0.5 w-6 bg-current transition-colors"
              />
              <motion.span
                animate={
                  mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="block h-0.5 w-6 bg-current origin-center transition-colors"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-navy-900/98 backdrop-blur-xl border-l border-white/10 shadow-2xl"
            >
              <div className="flex flex-col gap-2 p-6 pt-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg text-stone-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                  className="mt-4"
                >
                  <Link
                    href="/#newsletter"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-5 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
