import { apiFetch } from "./api";

export type CreateOrderPayload = {
  customerName?: string;
  phone?: string;
  items: Array<{
    productId?: string;
    name: string;
    qty: number;
    price: number;
  }>;
};

export async function createOrder(payload: CreateOrderPayload) {
  return apiFetch<{ orderCreated: boolean }>("/api/orders", {
    method: "POST",
    json: payload
  });
}
