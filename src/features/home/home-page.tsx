"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "./hero-section";

const FeaturedProducts = dynamic(
  () => import("./featured-products").then((m) => m.FeaturedProducts),
  { ssr: false }
);
const PromoBanner = dynamic(
  () => import("./promo-banner").then((m) => m.PromoBanner),
  { ssr: false }
);
const TrendingCarousel = dynamic(
  () => import("./trending-carousel").then((m) => m.TrendingCarousel),
  { ssr: false }
);
const CategoriesGrid = dynamic(
  () => import("./categories-grid").then((m) => m.CategoriesGrid),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("./testimonials").then((m) => m.Testimonials),
  { ssr: false }
);
const InstagramShowcase = dynamic(
  () => import("./instagram-showcase").then((m) => m.InstagramShowcase),
  { ssr: false }
);
const Newsletter = dynamic(
  () => import("./newsletter").then((m) => m.Newsletter),
  { ssr: false }
);

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedProducts />
      <PromoBanner />
      <TrendingCarousel />
      <CategoriesGrid />
      <Testimonials />
      <InstagramShowcase />
      <Newsletter />
    </div>
  );
}
