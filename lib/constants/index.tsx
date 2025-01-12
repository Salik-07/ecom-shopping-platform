export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Ecom Shopping";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An ecommerce platform";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "Ecom Shopping";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "",
  password: "",
};
