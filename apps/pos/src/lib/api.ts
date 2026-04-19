const COMMERCE_URL =
  process.env.NEXT_PUBLIC_COMMERCE_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000";

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${COMMERCE_URL}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API ${response.status}: ${await response.text()}`);
  }

  return response.json() as Promise<T>;
}

export async function getProducts() {
  return apiFetch("/api/products");
}

export async function createSale(payload: {
  items: Array<{ product_id: number | string; quantity: number; price?: number }>;
  customer_name?: string;
  customer_phone?: string;
  payment_method?: string;
}) {
  return apiFetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
