import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  Directory: [
    { label: "All Tools", href: "/#tools" },
    { label: "Categories", href: "/#categories" },
    { label: "Featured", href: "/#featured" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#171412] border-t border-stone-800/50">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Logo size={32} />
              <span className="text-lg font-bold text-[#fefce8] tracking-tight">
                Restaurant<span className="text-orange-500">AI</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              The most comprehensive directory of AI tools for restaurants.
              Find the perfect solution to transform your business.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[#fefce8] uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} RestaurantTools.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
