"use server";

import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCTS_LIMIT,
  });

  // Convert Prisma objects to plain objects and Decimal objects to numbers for client components
  return products.map((product) =>
    convertToPlainObject({
      ...product,
      price: Number(product.price),
      rating: Number(product.rating),
      createdAt: product.createdAt.toISOString(),
    })
  );
}

// Get product by slug
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findFirst({
    where: { slug },
  });

  if (!product) {
    return null;
  }

  // Convert Prisma object to plain object and Decimal objects to numbers for client components
  return convertToPlainObject({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
    createdAt: product.createdAt.toISOString(),
  });
}
