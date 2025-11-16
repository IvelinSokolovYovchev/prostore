"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductPrice } from "./product-price";
import { Product } from "@/types";

export type { Product };

export const ProductCard = ({ product }: { product: Product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement add to cart functionality
    // console.log("Add to cart:", product.slug);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>

        <Image
          src={product.images[0] || "/images/logo.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </CardHeader>

      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>

        <Link
          href={`/products/${product.slug}`}
          className="flex flex-1 flex-col"
        >
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <ProductPrice value={product.price} />
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full"
          size="sm"
        >
          <ShoppingCartIcon className="size-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
