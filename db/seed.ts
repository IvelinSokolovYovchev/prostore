import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { sampleData } from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.product.deleteMany();

  const products = sampleData.products.map((product) => ({
    name: product.name,
    slug: product.slug,
    category: product.category,
    description: product.description,
    images: product.images,
    price: product.price.toString(), // Convert to string for Decimal
    rating: product.rating.toString(), // Convert to string for Decimal
    brand: product.brand,
    numReviews: product.numReviews,
    stock: product.stock,
    isFeatured: product.isFeatured,
    banner: product.banner,
  }));

  await prisma.product.createMany({
    data: products,
  });

  await prisma.$disconnect();
}

main();
