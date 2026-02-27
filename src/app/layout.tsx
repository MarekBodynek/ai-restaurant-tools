import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { BackToTop } from "@/components/BackToTop";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RestaurantAI — The #1 AI Tools Directory for Restaurants",
    template: "%s | RestaurantAI",
  },
  description:
    "Discover 54+ AI-powered tools to transform your restaurant. From reservations to kitchen robotics — find, compare, and choose the best AI solutions for your business.",
  keywords: [
    "restaurant AI tools",
    "AI for restaurants",
    "restaurant technology",
    "restaurant automation",
    "restaurant software",
    "AI chatbot restaurant",
    "restaurant POS",
    "restaurant analytics",
  ],
  metadataBase: new URL("https://restauranttools.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RestaurantAI",
    title: "RestaurantAI — The #1 AI Tools Directory for Restaurants",
    description:
      "Discover 54+ AI-powered tools to transform your restaurant. From reservations to kitchen robotics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RestaurantAI Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RestaurantAI — The #1 AI Tools Directory for Restaurants",
    description:
      "Discover 54+ AI-powered tools to transform your restaurant.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-white text-navy-800">
        <ScrollProgressBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
