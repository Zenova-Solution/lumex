import { ProductDetailPage } from "@/features/products/product-detail-page";
import { featuredProducts } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "View product details and add to cart.",
};

export function generateStaticParams() {
  return featuredProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  return <ProductDetailPage slug={slug} />;
}
