export interface Tool {
  name: string;
  slug: string;
  category: string;
  description: string;
  price: string;
  icon: string;
  url?: string;
  affiliateUrl?: string;
  affiliateCommission?: string;
  affiliateRel?: string;
}

export interface CategoryInfo {
  name: string;
  count: number;
  icon: string;
  description: string;
  color: string;
}
