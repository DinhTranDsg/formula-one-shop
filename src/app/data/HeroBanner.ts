// /data/heroBanners.ts
export type HeroBanner = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  href?: string;
};

export const heroBanners: HeroBanner[] = [
  {
    id: "hero-sale",
    title: "Up to 50% Off Selected Lines",
    subtitle: "Full Throttle End of Season Savings",
    image: "/images/hero/flag-sale.jpg",
    ctaText: "Shop now",
    href: "/collections/sale",
  },
  {
    id: "hero-new",
    title: "New Arrivals — 2025 Collection",
    subtitle: "Get the latest fanwear",
    image: "/images/hero/new-collection.jpg",
    ctaText: "Explore",
    href: "/collections/new",
  },
];
