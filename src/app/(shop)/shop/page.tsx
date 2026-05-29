import { ShopPage } from "@/features/shop/shop-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Collection",
  description: "Browse our curated collection of premium products.",
};

export default function Page() {
  return <ShopPage />;
}
