import { footballProducts } from "./football";
import { basketballProducts } from "./basketball";
import { nationalTeamProducts } from "./nationalTeams";
import { retroProducts } from "./retro";
import { genericProducts } from "./generic";

/**
 * ============================================================
 * MASTER PRODUCT CATALOGUE
 * ============================================================
 */

export const products = [
  ...footballProducts,
  ...basketballProducts,
  ...nationalTeamProducts,
  ...retroProducts,
  ...genericProducts,
];

/**
 * Homepage Collections
 */

export const featuredProducts = products.filter(
  (product) => product.isFeatured
);

export const newArrivals = products.filter(
  (product) => product.isNew
);

export const bestSellers = products.filter(
  (product) => product.isBestSeller
);

export const inStockProducts = products.filter(
  (product) => product.inStock
);

/**
 * ============================================================
 * FILTER OPTIONS (Generated Automatically)
 * ============================================================
 */

export const categories = [
  ...new Set(
    products
      .map((product) => product.category)
      .filter(Boolean)
  ),
].sort();

export const leagues = [
  ...new Set(
    products
      .map((product) => product.league)
      .filter(Boolean)
  ),
].sort() as string[];

export const brands = [
  ...new Set(
    products
      .map((product) => product.brand)
      .filter(Boolean)
  ),
].sort() as string[];

export const minPrice = Math.min(
  ...products.map((product) => product.price)
);

export const maxProductPrice = Math.max(
  ...products.map((product) => product.price)
);