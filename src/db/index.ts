'use server'; // ✅ Ensures this file is treated as server-only

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'; // ✅ Required for drizzle's adapter
import { eq } from 'drizzle-orm';
import { usersTable } from '../db/schema';

// ✅ Use postgres-js client
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    id: '',
    name: 'John',
    age: 30,
    email: 'john@example.com',
    emailVerified: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!');

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database:', users);

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!');

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!');
}

main();
