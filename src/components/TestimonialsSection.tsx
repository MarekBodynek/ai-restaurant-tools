"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "RestaurantAI helped us find the perfect reservation system. We switched to Resy and saw a 30% increase in covers within the first month.",
    name: "Sarah Chen",
    role: "Owner, The Golden Fork",
    avatar: "SC",
  },
  {
    quote:
      "The AI chatbot we discovered through this directory handles 80% of our customer inquiries. Our team can finally focus on what matters — great food.",
    name: "Marcus Johnson",
    role: "GM, Bistro Moderne",
    avatar: "MJ",
  },
  {
    quote:
      "We reduced food waste by 40% after implementing the inventory AI tool we found here. Best business decision we've made this year.",
    name: "Elena Rodriguez",
    role: "Operations Director, Casa Fresca",
    avatar: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-stone-50/80">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-3 mb-4">
              Trusted by Restaurant Owners
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              See how restaurateurs are using our directory to find the AI tools
              that transform their business.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="h-full p-8 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:border-orange-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-stone-600 leading-relaxed mb-6 text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-stone-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
