import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/lib/generated/prisma/client";

// Only set up WebSocket in Node.js runtime (not in serverless/edge environments)
// In serverless environments like Vercel, Neon uses HTTP fetch by default
// WebSocket is only needed for local development or Node.js environments
if (
  typeof window === "undefined" &&
  typeof process !== "undefined" &&
  process.env.VERCEL !== "1"
) {
  try {
    // Use require for Node.js environments (synchronous)
    const ws = require("ws");
    neonConfig.webSocketConstructor = ws.default || ws;
  } catch (error) {
    // WebSocket not available, Neon will use HTTP fetch instead
    // This is fine for serverless environments
  }
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Instantiates the Prisma adapter using the Neon connection string to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon({ connectionString });

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
const createPrismaClient = () => {
  return new PrismaClient({ adapter }).$extends({
    result: {
      product: {
        price: {
          compute(product: { price: { toString(): string } }) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product: { rating: { toString(): string } }) {
            return product.rating.toString();
          },
        },
      },
    },
  });
};

// Singleton pattern for Next.js (works in both dev and production)
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Cache the Prisma client in both dev and production to avoid creating multiple instances
if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}
