export const API_URL = "http://127.0.0.1:8000/api";

type ApiFetchOptions = RequestInit & {
  json?: unknown;
};

export async function apiFetch<T = any>(
  path: string,
  options: ApiFetchOptions = {}
): Promise<T> {
  const { json, headers, ...rest } = options;

  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    body: json !== undefined ? JSON.stringify(json) : rest.body,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export async function getProducts() {
  return apiFetch("/products");
}
