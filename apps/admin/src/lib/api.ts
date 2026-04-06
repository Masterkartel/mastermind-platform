import { createApiClient } from "@mastermind/sdk";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_COMMERCE_API_URL || "http://localhost:9000";

export const adminApi = createApiClient(API_BASE_URL);
export { API_BASE_URL };
