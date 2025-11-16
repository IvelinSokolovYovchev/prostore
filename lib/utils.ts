import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert Prisma object to plain object (removes symbol properties)
export function convertToPlainObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}

// Format number with decimal places
export function formatNumberWithDecimalPlaces(
  value: number,
  decimalPlaces: number = 2
): string {
  const [integerPart, decimalPart] = value.toString().split(".");
  return decimalPart
    ? `${integerPart}.${decimalPart.padEnd(decimalPlaces, "0")}`
    : `${integerPart}.${"0".repeat(decimalPlaces)}`;
}
