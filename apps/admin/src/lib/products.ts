import { apiFetch } from "./api";

export type AdminProductPayload = {
  name: string;
  code: string;
  price: number;
};

export async function getProducts() {
  return apiFetch<{ products: AdminProductPayload[] }>("/api/products");
}

export async function createProduct(payload: AdminProductPayload) {
  return apiFetch<{ created: boolean }>("/api/products", {
    method: "POST",
    json: payload
  });
}
