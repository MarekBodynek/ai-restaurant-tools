import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — RestaurantTools.ai Insights & Guides",
  description:
    "Actionable insights on AI tools for restaurants. Learn how to reduce no-shows, optimize menus, improve inventory, and scale marketing with AI.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "RestaurantTools.ai Blog — Practical AI Growth Playbooks",
    description:
      "Read practical guides on chatbots, menu optimization, inventory AI, and restaurant marketing strategies for 2026.",
    type: "website",
    url: "https://restauranttools.ai/blog",
    siteName: "RestaurantTools.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RestaurantTools.ai Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RestaurantTools.ai Blog — Practical AI Growth Playbooks",
    description:
      "Read practical guides on chatbots, menu optimization, inventory AI, and restaurant marketing strategies for 2026.",
    images: ["/og-image.png"],
  },
};

const posts = [
  {
    title: "How AI Chatbots Are Reducing No-Shows by 40%",
    excerpt:
      "See the exact chatbot flows restaurants are using to confirm bookings, re-engage guests, and recover lost covers.",
    category: "Operations",
    readTime: "8 min read",
  },
  {
    title: "The Complete Guide to AI-Powered Menu Optimization",
    excerpt:
      "A practical framework for pricing, placement, and item engineering using AI insights from guest behavior and margin data.",
    category: "Menu Strategy",
    readTime: "11 min read",
  },
  {
    title: "Why Smart Restaurants Are Switching to AI Inventory Management",
    excerpt:
      "Learn how leading operators cut waste, automate ordering, and improve supplier decisions with predictive inventory tools.",
    category: "Inventory",
    readTime: "9 min read",
  },
  {
    title: "Restaurant Marketing in 2026: AI Tools That Actually Work",
    excerpt:
      "From local SEO to hyper-personalized campaigns — which AI tools deliver measurable ROI and which ones to skip.",
    category: "Marketing",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1c1917] mt-3 mb-4">
            AI Restaurant Insights
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            SEO-focused playbooks and trend reports for restaurant owners using
            AI to grow profitably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group p-6 sm:p-7 bg-white rounded-2xl border border-stone-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-stone-400">{post.readTime}</span>
              </div>

              <h2 className="font-semibold text-xl text-[#1c1917] mb-3 leading-snug group-hover:text-orange-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <button className="text-sm text-orange-700 font-semibold inline-flex items-center gap-2">
                Read article
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-orange-700 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
