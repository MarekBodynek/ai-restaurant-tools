import toolsData from "../../tools-data.json";
import { Tool, CategoryInfo } from "./types";

export const tools: Tool[] = toolsData;

const categoryMeta: Record<string, { icon: string; description: string; color: string }> = {
  Chatbots: {
    icon: "💬",
    description: "AI chatbots for customer service, reservations, and order management",
    color: "from-blue-500 to-blue-600",
  },
  Reservations: {
    icon: "📅",
    description: "Smart booking systems with AI-powered table and guest management",
    color: "from-purple-500 to-purple-600",
  },
  "Menu AI": {
    icon: "🍽️",
    description: "AI tools for menu optimization, recipe costing, and trend analysis",
    color: "from-green-500 to-green-600",
  },
  Inventory: {
    icon: "📦",
    description: "Intelligent inventory tracking, procurement, and waste reduction",
    color: "from-amber-500 to-amber-600",
  },
  Marketing: {
    icon: "📢",
    description: "AI-powered marketing, reputation management, and customer engagement",
    color: "from-pink-500 to-pink-600",
  },
  POS: {
    icon: "💳",
    description: "Point-of-sale systems with AI analytics and workforce management",
    color: "from-indigo-500 to-indigo-600",
  },
  Delivery: {
    icon: "🚀",
    description: "Online ordering and delivery management with smart optimization",
    color: "from-red-500 to-red-600",
  },
  Kitchen: {
    icon: "👨‍🍳",
    description: "Kitchen robotics, food safety monitoring, and automation",
    color: "from-teal-500 to-teal-600",
  },
  Analytics: {
    icon: "📊",
    description: "Business intelligence and AI-driven insights for restaurant operations",
    color: "from-cyan-500 to-cyan-600",
  },
};

export function getCategories(): CategoryInfo[] {
  const categoryMap = new Map<string, number>();
  tools.forEach((tool) => {
    categoryMap.set(tool.category, (categoryMap.get(tool.category) || 0) + 1);
  });

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
    icon: categoryMeta[name]?.icon || "🔧",
    description: categoryMeta[name]?.description || "",
    color: categoryMeta[name]?.color || "from-gray-500 to-gray-600",
  }));
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getFeaturedTools(): Tool[] {
  const featured = ["opentable", "toast", "tastewise"];
  return featured
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is Tool => t !== undefined);
}

export function getRelatedTools(tool: Tool, limit: number = 4): Tool[] {
  return tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, limit);
}
