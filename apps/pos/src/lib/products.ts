import { apiFetch } from "./api";

export type PosProduct = {
  id?: string;
  name?: string;
  title?: string;
  code?: string;
  price?: number | string;
};

export async function getProducts() {
  return apiFetch<{ products: PosProduct[] }>("/api/products");
}
