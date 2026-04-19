import { defineConfig, loadEnv } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

const storefrontUrl =
  process.env.STORE_FRONTEND_URL || "http://localhost:3000";
const adminUrl =
  process.env.ADMIN_FRONTEND_URL || "http://localhost:3001";
const posUrl =
  process.env.POS_FRONTEND_URL || "http://localhost:3002";

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    workerMode: process.env.MEDUSA_WORKER_MODE || "shared",
    http: {
      storeCors: process.env.STORE_CORS || storefrontUrl,
      adminCors:
        process.env.ADMIN_CORS || `${adminUrl},${posUrl}`,
      authCors:
        process.env.AUTH_CORS ||
        `${storefrontUrl},${adminUrl},${posUrl}`,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret"
    }
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true"
  }
});
