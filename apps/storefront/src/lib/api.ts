const COMMERCE_URL =
  process.env.NEXT_PUBLIC_COMMERCE_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000";

type QueryValue = string | number | boolean | undefined | null;

type ApiOptions = RequestInit & {
  query?: Record<string, QueryValue>;
};

function buildUrl(path: string, query?: Record<string, QueryValue>) {
  const url = new URL(path.startsWith("/") ? path : `/${path}`, COMMERCE_URL);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }

  return url.toString();
}

async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const { query, headers, ...rest } = options;

  const response = await fetch(buildUrl(path, query), {
    ...rest,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

export type Product = {
  id: number | string;
  name: string;
  slug?: string;
  sku?: string;
  price?: number | string;
  formatted_price?: string;
  special_price?: number | string | null;
  formatted_special_price?: string;
  short_description?: string;
  description?: string;
  images?: Array<{
    url?: string;
    small_image_url?: string;
    medium_image_url?: string;
    large_image_url?: string;
    original_image_url?: string;
  }>;
};

export type ProductsResponse = {
  data?: Product[];
  links?: unknown[];
  meta?: Record<string, unknown>;
};

export type Category = {
  id: number | string;
  name: string;
  slug?: string;
};

export async function getProducts(params?: {
  page?: number;
  limit?: number;
  category_id?: number | string;
  search?: string;
}) {
  return apiFetch<ProductsResponse>("/api/products", {
    method: "GET",
    query: params,
  });
}

export async function getCategories() {
  return apiFetch<Category[]>("/api/categories", {
    method: "GET",
  });
}

export async function getCart() {
  return apiFetch("/api/checkout/cart", {
    method: "GET",
  });
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

export async function removeCartItem(payload: unknown) {
  return apiFetch("/api/checkout/cart", {
    method: "DELETE",
    body: JSON.stringify(payload),
  });
}

export async function placeOrder(payload: unknown) {
  return apiFetch("/api/checkout/onepage/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export { COMMERCE_URL };
