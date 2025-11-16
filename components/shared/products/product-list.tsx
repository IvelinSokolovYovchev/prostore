import { ProductCard } from "./product-card";
import { Product } from "@/types";

type ProductListProps = {
  products: Product[];
  title: string;
};

export const ProductList = ({ products, title }: ProductListProps) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex-center h-64">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="h2-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
};
