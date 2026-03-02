import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RestaurantTools.ai privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — RestaurantTools.ai",
    description: "How we collect, use, and protect your data.",
    url: "https://restauranttools.ai/privacy",
    siteName: "RestaurantTools.ai",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — RestaurantTools.ai",
    description: "How we collect, use, and protect your data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#171412] min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#fefce8] tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-stone max-w-none space-y-6 text-stone-400 leading-relaxed">
            <p className="text-sm text-stone-500">Last updated: February 2026</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as when you subscribe to our
              newsletter or submit a contact form. We also collect basic analytics data (page views,
              referral sources) through Google Analytics to improve our service.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">2. How We Use Your Information</h2>
            <p>
              We use collected information to operate and improve RestaurantTools.ai, send newsletter
              updates (if subscribed), respond to inquiries, and analyze site usage to enhance user
              experience.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">3. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who
              help us operate the site (e.g., hosting, analytics) under strict confidentiality
              agreements.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">4. Cookies</h2>
            <p>
              We use cookies and similar technologies for analytics and to remember your preferences.
              You can control cookies through your browser settings.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by
              contacting us at{" "}
              <a href="mailto:contact@restauranttools.ai" className="text-orange-400 hover:text-orange-300">
                contact@restauranttools.ai
              </a>.
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">6. Contact</h2>
            <p>
              For privacy-related questions, reach us at{" "}
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
