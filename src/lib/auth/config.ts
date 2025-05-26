import { db } from '../db'
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { user, session, account, verification } from '../db/schema'; 
 
export const auth = betterAuth({
        emailAndPassword: {  
        enabled: true
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: { // Pass the schema object, not a file path
      user,
      session,
      account,
      verification
    }
    })
});
