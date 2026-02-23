"use client";

import { AnimatedSection } from "./AnimatedSection";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-padding">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900" />
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(249,115,22,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 50%, rgba(249,115,22,0.1) 0%, transparent 50%)
                  `,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-6">
                Stay Updated
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get the Latest AI Restaurant Tools
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                We review and add new tools every week. Subscribe to get
                the best picks delivered to your inbox — no spam, ever.
              </p>

              {/* Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 text-sm transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 text-sm whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Join 2,000+ restaurant owners. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
