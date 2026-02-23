"use client";

import { motion } from "framer-motion";
import { Tool } from "@/lib/types";

const featuresByCategory: Record<string, string[]> = {
  Chatbots: [
    "24/7 automated customer support",
    "Multi-channel messaging (web, social, SMS)",
    "Reservation handling and confirmations",
    "Menu Q&A and order tracking",
    "Natural language understanding",
    "Analytics and conversation insights",
  ],
  Reservations: [
    "AI-powered table management",
    "Guest CRM and preference tracking",
    "No-show prediction and prevention",
    "Dynamic pricing and revenue optimization",
    "Waitlist and walk-in management",
    "Multi-location support",
  ],
  "Menu AI": [
    "AI menu optimization and layout",
    "Recipe costing and food cost analysis",
    "Nutritional and allergen information",
    "Menu trend forecasting",
    "Automated upsell suggestions",
    "Multi-location consistency",
  ],
  Inventory: [
    "AI-driven ordering predictions",
    "Real-time inventory tracking",
    "Supplier management and procurement",
    "Food waste reduction analytics",
    "Invoice processing and cost tracking",
    "HACCP and compliance monitoring",
  ],
  Marketing: [
    "AI-powered email campaigns",
    "Review management and response",
    "Local SEO optimization",
    "Social media automation",
    "Customer segmentation and targeting",
    "Performance analytics dashboard",
  ],
  POS: [
    "AI-enhanced sales analytics",
    "Labor scheduling and optimization",
    "Online ordering integration",
    "Real-time performance dashboards",
    "Loyalty program management",
    "Multi-location management",
  ],
  Delivery: [
    "Multi-platform order consolidation",
    "AI demand forecasting",
    "Smart order routing",
    "Commission-free direct ordering",
    "Customer insights and marketing",
    "Kitchen display integration",
  ],
  Kitchen: [
    "AI-powered food preparation",
    "Computer vision quality control",
    "Temperature monitoring and alerts",
    "HACCP compliance automation",
    "Waste identification and tracking",
    "Predictive maintenance",
  ],
  Analytics: [
    "AI-driven business intelligence",
    "Demand and revenue forecasting",
    "Labor optimization insights",
    "Menu performance analysis",
    "Cross-location benchmarking",
    "Actionable recommendations",
  ],
};

interface ToolDetailClientProps {
  tool: Tool;
  categoryColor: string;
}

export function ToolDetailClient({ tool, categoryColor }: ToolDetailClientProps) {
  const features = featuresByCategory[tool.category] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-start gap-5 mb-8">
        <div
          className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryColor} flex items-center justify-center text-4xl shadow-lg`}
        >
          {tool.icon}
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-2">
            {tool.name}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {tool.category}
            </span>
            <span className="text-sm font-semibold text-orange-500">
              {tool.price}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-navy-800 mb-3">About</h2>
        <p className="text-gray-600 leading-relaxed text-base">
          {tool.description}
        </p>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          {tool.name} is a leading AI-powered {tool.category.toLowerCase()} solution designed
          specifically for the restaurant industry. It leverages advanced machine learning
          algorithms to help restaurants streamline operations, improve customer experience,
          and maximize revenue.
        </p>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-navy-800 mb-4">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80"
            >
              <svg
                className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-100">
        <h2 className="text-lg font-semibold text-navy-800 mb-2">Pricing</h2>
        <p className="text-2xl font-bold text-orange-500 mb-2">{tool.price}</p>
        <p className="text-sm text-gray-500">
          Contact {tool.name} directly for detailed pricing information, custom
          plans, and enterprise quotes.
        </p>
      </div>
    </motion.div>
  );
}
