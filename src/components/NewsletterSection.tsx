"use client";

import { AnimatedSection } from "./AnimatedSection";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-padding">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#171412]" />
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(217,119,6,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 50%, rgba(194,65,12,0.14) 0%, transparent 50%)
                  `,
                }}
              />
            </div>

            <div className="relative px-5 py-12 sm:px-16 sm:py-20 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-6">
                Stay Updated
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fefce8] mb-4">
                Get the Latest AI Restaurant Tools
              </h2>
              <p className="text-stone-300 max-w-xl mx-auto mb-3">
                We review and add new tools every week. Subscribe to get the
                best picks delivered to your inbox — no spam, ever.
              </p>
              <p className="text-orange-300 max-w-xl mx-auto mb-8 text-sm sm:text-base font-medium">
                Get our free guide: Top 10 AI Tools Every Restaurant Needs in
                2026
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-[#fefce8] placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 text-sm transition-all min-h-[52px]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-700 text-[#fefce8] font-semibold rounded-xl transition-transform duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap min-h-[52px]"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-xs text-stone-400 mt-4">
                Join 2,000+ restaurant owners. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
