// ✅ Correct syntax (for PostgreSQL)
import { config } from 'dotenv';
import {defineConfig} from "drizzle-kit";
config({path: ".env"});

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // Specify dialect here
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Use `url` instead of `connectionString`
  },
});