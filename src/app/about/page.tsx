import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RestaurantTools.ai — our mission to help restaurant owners discover and adopt the best AI tools for their business.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About RestaurantTools.ai",
    description:
      "Our mission: help restaurant owners discover and adopt the best AI tools for their business.",
    url: "https://restauranttools.ai/about",
    siteName: "RestaurantTools.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About RestaurantTools.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About RestaurantTools.ai",
    description:
      "Our mission: help restaurant owners discover and adopt the best AI tools for their business.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#171412] min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#fefce8] tracking-tight mb-6">
            About <span className="text-orange-500">RestaurantTools.ai</span>
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto">
            We&apos;re on a mission to help restaurant owners navigate the AI
            revolution — so they can focus on what they do best: creating
            incredible dining experiences.
          </p>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-900/50 border border-stone-800/50 rounded-2xl p-8 sm:p-12 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#fefce8] mb-4">Our Story</h2>
              <p className="text-stone-400 leading-relaxed">
                RestaurantTools.ai was founded by a team of restaurant tech enthusiasts who saw a
                growing gap between AI innovation and restaurant adoption. While every industry was
                being transformed by artificial intelligence, most restaurant owners were left
                overwhelmed — unsure which tools were real, which were hype, and which would actually
                work for their business.
              </p>
              <p className="text-stone-400 leading-relaxed mt-4">
                We built this directory to bridge that gap. A single place where restaurant
                professionals can discover, compare, and choose AI tools with confidence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#fefce8] mb-4">Our Mission</h2>
              <p className="text-stone-400 leading-relaxed">
                To be the most trusted resource for restaurant owners looking to adopt AI. We believe
                technology should empower restaurants — not complicate them. Every tool in our
                directory is researched, categorized, and presented with the restaurant operator in
                mind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#fefce8] mb-6">Our Values</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-[#171412] border border-stone-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">✦</div>
                  <h3 className="text-lg font-semibold text-[#fefce8] mb-2">Curated Quality</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    We don&apos;t list everything — we list what matters. Every tool is vetted for
                    relevance and quality.
                  </p>
                </div>
                <div className="bg-[#171412] border border-stone-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">⚖</div>
                  <h3 className="text-lg font-semibold text-[#fefce8] mb-2">Honest Reviews</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    No pay-to-play rankings. Our evaluations are based on real capabilities, not
                    advertising budgets.
                  </p>
                </div>
                <div className="bg-[#171412] border border-stone-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🍽</div>
                  <h3 className="text-lg font-semibold text-[#fefce8] mb-2">Restaurant-First</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    We think from the operator&apos;s perspective. If it doesn&apos;t help a real
                    restaurant, it doesn&apos;t belong here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
