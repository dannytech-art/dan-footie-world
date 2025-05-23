// ✅ Correct syntax (for PostgreSQL)
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // Specify dialect here
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Use `url` instead of `connectionString`
  },
} satisfies Config;