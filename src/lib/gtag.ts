// TODO: Replace with your actual GA4 Measurement ID
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export function pageview(url: string): void {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function event(
  action: string,
  {
    event_category,
    event_label,
    value,
  }: {
    event_category?: string;
    event_label?: string;
    value?: number;
  },
): void {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
}
