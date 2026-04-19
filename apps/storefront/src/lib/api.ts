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

export const storefrontApi = {
  get: <T = any>(path: string) => apiFetch<T>(path),
  post: <T = any>(path: string, json?: unknown) =>
    apiFetch<T>(path, { method: "POST", json }),
  put: <T = any>(path: string, json?: unknown) =>
    apiFetch<T>(path, { method: "PUT", json }),
  delete: <T = any>(path: string) =>
    apiFetch<T>(path, { method: "DELETE" }),
};

export async function getProducts() {
  return apiFetch("/products");
}
