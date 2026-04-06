import { apiFetch } from "./api";

export type PosSalePayload = {
  source: "pos";
  items: Array<{
    productId?: string;
    name: string;
    qty: number;
    price: number;
  }>;
  paymentMethod: "cash" | "paystack";
};

export async function createPosSale(payload: PosSalePayload) {
  return apiFetch<{ orderCreated: boolean }>("/api/orders", {
    method: "POST",
    json: payload
  });
}
