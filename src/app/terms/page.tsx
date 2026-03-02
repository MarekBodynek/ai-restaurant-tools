import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RestaurantTools.ai terms of service — rules and guidelines for using our platform.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — RestaurantTools.ai",
    description: "Rules and guidelines for using our platform.",
    url: "https://restauranttools.ai/terms",
    siteName: "RestaurantTools.ai",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — RestaurantTools.ai",
    description: "Rules and guidelines for using our platform.",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#171412] min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#fefce8] tracking-tight mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-stone max-w-none space-y-6 text-stone-400 leading-relaxed">
            <p className="text-sm text-stone-500">Last updated: February 2026</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing RestaurantTools.ai, you agree to these Terms of Service. If you do not
              agree, please do not use our site.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">2. Use of the Directory</h2>
            <p>
              RestaurantTools.ai provides a curated directory of AI tools for the restaurant
              industry. Listings are for informational purposes only. We do not guarantee the
              accuracy, completeness, or reliability of any third-party tool listed.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this site — including text, graphics, logos, and design — is the
              property of RestaurantTools.ai and protected by applicable intellectual property laws.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">4. User Submissions</h2>
            <p>
              If you submit a tool or other content to us, you grant RestaurantTools.ai a
              non-exclusive, royalty-free license to use, display, and distribute that content on our
              platform.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">5. Limitation of Liability</h2>
            <p>
              RestaurantTools.ai is provided &quot;as is&quot; without warranties of any kind. We are
              not liable for any damages arising from your use of the site or reliance on listed
              tools.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">6. Changes</h2>
            <p>
              We may update these terms at any time. Continued use of the site constitutes acceptance
              of the revised terms.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">7. Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href="mailto:contact@restauranttools.ai" className="text-orange-400 hover:text-orange-300">
                contact@restauranttools.ai
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
