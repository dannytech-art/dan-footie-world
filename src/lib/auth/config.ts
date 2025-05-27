// src/lib/auth/config.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "src/db";
import * as schema from "src/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // Specify your database provider here
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verificationToken: schema.verificationToken,
    },
  }),
  providers: [
    {
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await db.query.user.findFirst({
          where: (users, { eq }) => eq(users.email, credentials?.email),
        });

        if (!user || user.password !== credentials?.password) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    },
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  secret: process.env.AUTH_SECRET!,
  trustHost: true,
});
