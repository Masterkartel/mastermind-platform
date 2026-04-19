const COMMERCE_URL =
  process.env.NEXT_PUBLIC_COMMERCE_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000";

type ApiOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined | null>;
};

function buildUrl(path: string, query?: ApiOptions["query"]) {
  const url = new URL(
    path.startsWith("/") ? path : `/${path}`,
    COMMERCE_URL
  );

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
  special_price?: number | string | null;
  image?: string | null;
  images?: string[];
  description?: string;
  short_description?: string;
  in_stock?: boolean;
};

export type ProductListResponse = {
  data?: Product[];
  products?: Product[];
};

export async function getProducts(params?: {
  page?: number;
  limit?: number;
  category_id?: number | string;
  search?: string;
}) {
  return apiFetch<ProductListResponse>("/api/products", {
    method: "GET",
    query: params,
  });
}

export async function getProductBySlug(slug: string) {
  return apiFetch<Product>(`/api/products/${slug}`, {
    method: "GET",
  });
}

export async function createCart(payload: {
  items: Array<{ product_id: number | string; quantity: number }>;
}) {
  return apiFetch("/api/cart", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function createOrder(payload: {
  customer_name: string;
  customer_phone: string;
  items: Array<{ product_id: number | string; quantity: number }>;
  payment_method?: string;
}) {
  return apiFetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export { COMMERCE_URL };
