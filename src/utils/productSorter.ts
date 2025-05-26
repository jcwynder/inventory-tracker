import { Product } from "../models/Product";

export function sortByPrice(products: Product[], ascending = true): Product[] {
  return products.sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
}

export function sortByName(products: Product[]): Product[] {
  return products.sort((a, b) => a.name.localeCompare(b.name));
}
