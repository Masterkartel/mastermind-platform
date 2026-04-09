const API_BASE_URL =
  process.env.NEXT_PUBLIC_COMMERCE_API_URL || "http://localhost:9000";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
}

/* products */

export function getProducts() {
  return apiFetch("/store/products");
}

/* orders */

export function createOrder(payload: unknown) {
  return apiFetch("/store/orders", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

/* admin */

export function adminGetProducts() {
  return apiFetch("/admin/products");
}
