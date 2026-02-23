import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog — Restaurant AI Insights & Guides",
  description:
    "Expert insights on AI tools for restaurants. Guides, comparisons, and industry trends to help you make smarter technology decisions.",
};

const placeholderPosts = [
  {
    title: "Top 10 AI Tools Every Restaurant Should Know in 2025",
    excerpt:
      "From AI chatbots to smart inventory management, discover the essential tools transforming the restaurant industry.",
    category: "Guides",
    date: "Coming Soon",
  },
  {
    title: "How AI Reservations Are Reducing No-Shows by 35%",
    excerpt:
      "Learn how predictive AI is helping restaurants minimize no-shows and optimize table turnover for maximum revenue.",
    category: "Case Studies",
    date: "Coming Soon",
  },
  {
    title: "The Complete Guide to Restaurant Chatbots",
    excerpt:
      "Everything you need to know about implementing AI chatbots — from choosing a platform to measuring ROI.",
    category: "Guides",
    date: "Coming Soon",
  },
  {
    title: "AI-Powered Menu Engineering: A Data-Driven Approach",
    excerpt:
      "How AI tools analyze customer behavior, food costs, and trends to design menus that maximize profitability.",
    category: "Industry",
    date: "Coming Soon",
  },
  {
    title: "Reducing Food Waste with Computer Vision AI",
    excerpt:
      "Explore how kitchen cameras and AI are helping restaurants cut waste by up to 50% while saving thousands.",
    category: "Technology",
    date: "Coming Soon",
  },
  {
    title: "Restaurant POS Systems Compared: AI Features Breakdown",
    excerpt:
      "A detailed comparison of Toast, Square, Clover, and Lightspeed — focusing on their AI and analytics capabilities.",
    category: "Comparisons",
    date: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 mt-3 mb-4">
            AI Restaurant Insights
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Expert guides, case studies, and industry analysis to help you navigate
            the world of AI in hospitality.
          </p>
        </div>

        {/* Coming soon banner */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 p-10 sm:p-14 text-center">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 50%, rgba(217,119,6,0.2) 0%, transparent 50%)`,
                }}
              />
            </div>
            <div className="relative">
              <span className="inline-block text-5xl mb-4">✍️</span>
              <h2 className="text-2xl font-bold text-white mb-3">
                Blog Launching Soon
              </h2>
              <p className="text-stone-400 max-w-md mx-auto mb-6">
                We&apos;re working on in-depth articles about AI in the restaurant
                industry. Subscribe to be notified when we publish.
              </p>
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 text-sm"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Placeholder posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post) => (
            <article
              key={post.title}
              className="group p-6 bg-white rounded-2xl border border-stone-100 shadow-sm opacity-75"
            >
              {/* Placeholder image */}
              <div className="w-full h-40 rounded-xl bg-stone-100 mb-5 flex items-center justify-center">
                <svg className="w-10 h-10 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-stone-400">{post.date}</span>
              </div>

              <h3 className="font-semibold text-navy-800 mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-stone-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-orange-500 transition-colors font-medium"
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
