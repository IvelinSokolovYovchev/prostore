import { ProductList } from "@/components/shared/products";
import { getLatestProducts } from "@/lib/actions/product.actions";
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  const products = await getLatestProducts();
  // await delay(3000);

  return <ProductList products={products} title="Newest Arrivals" />;
}
