"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/#tools", label: "Tools" },
  { href: "/#categories", label: "Categories" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const getLocalizedHref = (newLocale: "en" | "es") => {
    // Strip existing /es prefix to get the base path
    const basePath = pathname.startsWith("/es")
      ? pathname.slice(3) || "/"
      : pathname;
    return newLocale === "es" ? `/es${basePath === "/" ? "" : basePath}` : basePath;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1c1917]/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-[#1c1917]/85 backdrop-blur-xl"
      } border-b border-stone-700/40`}
    >
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="transition-transform duration-300 group-hover:rotate-6">
              <Logo size={36} />
            </div>
            <span className="text-xl font-bold text-[#fefce8] tracking-tight">
              Restaurant<span className="text-orange-500">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-stone-300 hover:text-[#fefce8] transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <div className="flex items-center gap-1 text-sm">
              <Link
                href={getLocalizedHref("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "en"
                    ? "text-orange-500 font-semibold"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                EN
              </Link>
              <span className="text-stone-600">/</span>
              <Link
                href={getLocalizedHref("es")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "es"
                    ? "text-orange-500 font-semibold"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                ES
              </Link>
            </div>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-700 text-[#fefce8] text-sm font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2.5 -mr-2 text-stone-300 hover:text-[#fefce8] min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className="block h-0.5 w-6 bg-current origin-center hamburger-line"
                style={
                  mobileOpen
                    ? { transform: "rotate(45deg) translate(6px, 6px)" }
                    : undefined
                }
              />
              <span
                className="block h-0.5 w-6 bg-current hamburger-line"
                style={
                  mobileOpen
                    ? { opacity: 0, transform: "translateX(-10px)" }
                    : undefined
                }
              />
              <span
                className="block h-0.5 w-6 bg-current origin-center hamburger-line"
                style={
                  mobileOpen
                    ? { transform: "rotate(-45deg) translate(6px, -6px)" }
                    : undefined
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 z-40 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm mobile-menu-overlay ${
            mobileOpen ? "open" : ""
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-xs bg-[#1c1917] border-l border-stone-700/50 shadow-2xl mobile-menu-panel ${
            mobileOpen ? "open" : ""
          }`}
        >
          <div className="flex flex-col gap-3 p-6 pt-8">
            {navLinks.map((link, i) => (
              <div
                key={link.href}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.3s ease ${i * 0.08}s, transform 0.3s ease ${i * 0.08}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg text-stone-200 hover:text-[#fefce8] py-4 px-4 rounded-lg hover:bg-white/5 transition-colors min-h-[52px]"
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div
              className="mt-4"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.3s ease ${navLinks.length * 0.08}s, transform 0.3s ease ${navLinks.length * 0.08}s`,
              }}
            >
              <Link
                href="/#newsletter"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-4 bg-orange-500 hover:bg-orange-700 text-[#fefce8] font-semibold rounded-xl transition-colors min-h-[52px]"
              >
                Get Started
              </Link>
            </div>
            <div
              className="mt-2 flex items-center gap-2 px-4"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.3s ease ${(navLinks.length + 1) * 0.08}s, transform 0.3s ease ${(navLinks.length + 1) * 0.08}s`,
              }}
            >
              <span className="text-sm text-stone-500">Language:</span>
              <Link
                href={getLocalizedHref("en")}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors min-h-[44px] flex items-center ${
                  locale === "en"
                    ? "text-orange-500 font-semibold bg-white/5"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                EN
              </Link>
              <Link
                href={getLocalizedHref("es")}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors min-h-[44px] flex items-center ${
                  locale === "es"
                    ? "text-orange-500 font-semibold bg-white/5"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                ES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
