import { apiFetch } from "./api";

export async function getOrders() {
  return apiFetch<{ orders: unknown[] }>("/api/orders");
}
