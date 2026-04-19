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
    const text = await response.text();
    throw new Error(`API ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

export async function getProducts() {
  return apiFetch("/api/products", { method: "GET" });
}

export async function getCart() {
  return apiFetch("/api/checkout/cart", { method: "GET" });
}

export async function addToCart(payload: {
  product_id: number | string;
  quantity: number;
}) {
  return apiFetch("/api/checkout/cart", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateCart(payload: unknown) {
  return apiFetch("/api/checkout/cart", {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function createOrder(payload: unknown) {
  return apiFetch("/api/checkout/onepage/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export { COMMERCE_URL };
