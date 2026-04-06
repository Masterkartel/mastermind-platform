import type {
  ApiOrdersResponse,
  ApiProductsResponse,
  ProductPayload
} from "@mastermind/types";

type FetchOptions = RequestInit & {
  json?: unknown;
};

export function createApiClient(baseUrl: string) {
  async function apiFetch<T>(
    path: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const { json, headers, ...rest } = options;

    const response = await fetch(`${baseUrl}${path}`, {
      ...rest,
      headers: {
        "Content-Type": "application/json",
        ...(headers || {})
      },
      body: json ? JSON.stringify(json) : rest.body
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error ${response.status}: ${text}`);
    }

    return response.json() as Promise<T>;
  }

  return {
    apiFetch,
    getProducts() {
      return apiFetch<ApiProductsResponse>("/api/products");
    },
    getOrders() {
      return apiFetch<ApiOrdersResponse>("/api/orders");
    },
    createProduct(payload: ProductPayload) {
      return apiFetch("/api/products", {
        method: "POST",
        json: payload
      });
    },
    updateProduct(id: string, payload: Partial<ProductPayload>) {
      return apiFetch(`/api/products/${id}`, {
        method: "PUT",
        json: payload
      });
    },
    deleteProduct(id: string) {
      return apiFetch(`/api/products/${id}`, {
        method: "DELETE"
      });
    },
    createOrder(payload: unknown) {
      return apiFetch("/api/orders", {
        method: "POST",
        json: payload
      });
    }
  };
}
