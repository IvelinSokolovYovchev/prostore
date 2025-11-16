import { z } from "zod";
import { formatNumberWithDecimalPlaces } from "./utils";
// Schema for inserting a new Product

const currency = z
  .string()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimalPlaces(Number(val))),
    { message: "Price must be a number with up to 2 decimal places" }
  );

export const insertProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),
  category: z.string().min(3, { message: "Category is required" }),
  brand: z.string().min(3, { message: "Brand is required" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),
  stock: z.coerce.number().min(0, { message: "Stock must be greater than 0" }),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required" }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
