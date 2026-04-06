import { apiFetch } from "./api";

export type StoreProduct = {
  id?: string;
  name?: string;
  title?: string;
  code?: string;
  price?: number | string;
};

export async function getProducts() {
  return apiFetch<{ products: StoreProduct[] }>("/api/products");
}
