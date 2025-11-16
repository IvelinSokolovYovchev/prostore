export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "ProStore";

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "ProStore is a platform for buying and selling products";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://http://localhost:3000/";
export const APP_EMAIL =
  process.env.NEXT_PUBLIC_APP_EMAIL || "info@prostore.com";
export const APP_PHONE = process.env.NEXT_PUBLIC_APP_PHONE || "+1234567890";
export const APP_ADDRESS =
  process.env.NEXT_PUBLIC_APP_ADDRESS || "123 Main St, Anytown, USA";
export const APP_CITY = process.env.NEXT_PUBLIC_APP_CITY || "Anytown";
export const APP_STATE = process.env.NEXT_PUBLIC_APP_STATE || "CA";
export const APP_ZIP = process.env.NEXT_PUBLIC_APP_ZIP || "12345";
export const APP_COUNTRY = process.env.NEXT_PUBLIC_APP_COUNTRY || "USA";
export const LATEST_PRODUCTS_LIMIT = parseInt(
  process.env.LATEST_PRODUCTS_LIMIT || "4"
);
