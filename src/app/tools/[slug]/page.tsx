import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getRelatedTools, getCategories } from "@/lib/tools";
import { ToolDetailClient } from "./ToolDetailClient";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  const seoDescription = `${tool.name} review for restaurants: ${tool.description} Compare features, pricing (${tool.price}), and best-fit use cases for ${tool.category.toLowerCase()} workflows.`;

  return {
    title: `${tool.name} — AI ${tool.category} Tool for Restaurants`,
    description: seoDescription,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} — AI ${tool.category} Tool | RestaurantTools.ai`,
      description: seoDescription,
      type: "article",
      url: `https://restauranttools.ai/tools/${tool.slug}`,
      siteName: "RestaurantTools.ai",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${tool.name} AI tool for restaurants`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} — AI ${tool.category} Tool`,
      description: seoDescription,
      images: ["/og-image.png"],
    },
  };
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const related = getRelatedTools(tool);
  const categories = getCategories();
  const categoryInfo = categories.find((c) => c.name === tool.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: tool.price,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-sm text-stone-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#tools" className="hover:text-orange-500 transition-colors">
              Tools
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy-800 font-medium">{tool.name}</span>
          </nav>
        </div>

        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ToolDetailClient tool={tool} categoryColor={categoryInfo?.color || "from-stone-500 to-stone-600"} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick info card */}
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
                <h3 className="font-semibold text-navy-800 mb-4">Quick Info</h3>
                <dl className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-stone-50">
                    <dt className="text-sm text-stone-500">Category</dt>
                    <dd className="text-sm font-medium text-navy-800">
                      {tool.category}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-stone-50">
                    <dt className="text-sm text-stone-500">Pricing</dt>
                    <dd className="text-sm font-medium text-orange-500">
                      {tool.price}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <dt className="text-sm text-stone-500">Type</dt>
                    <dd className="text-sm font-medium text-navy-800">
                      SaaS / Cloud
                    </dd>
                  </div>
                </dl>
              </div>

              {/* CTA card */}
              {tool.url && (
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-6 text-center">
                  <h3 className="font-semibold text-white mb-2">
                    Ready to try {tool.name}?
                  </h3>
                  <p className="text-sm text-stone-400 mb-4">
                    Visit their website to learn more and get started.
                  </p>
                  <a
                    href={tool.affiliateUrl || tool.url}
                    target="_blank"
                    rel={tool.affiliateUrl ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                    className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 text-sm"
                  >
                    {tool.affiliateUrl ? "Get Started Free →" : "Visit Website"}
                  </a>
                </div>
              )}

              {/* Related tools */}
              {related.length > 0 && (
                <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
                  <h3 className="font-semibold text-navy-800 mb-4">
                    Related Tools
                  </h3>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/tools/${r.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors group"
                      >
                        <span className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-xl">
                          {r.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-navy-800 group-hover:text-orange-500 transition-colors truncate">
                            {r.name}
                          </p>
                          <p className="text-xs text-stone-400">{r.price}</p>
                        </div>
                        <svg
                          className="w-4 h-4 text-stone-300 group-hover:text-orange-400 transition-colors flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-stone-100">
            <Link
              href="/#tools"
              className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-orange-500 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Tools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
