import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
const client = new Database(env.DATABASE_URL);
export const db = drizzle(client);
import * as table from '$lib/server/db/schema';
export const getallbooks = async () => {
    const results = await db.select().from(table.konyvek);
    return results;
};

export const getbook = async (id) => {
    const results = await db.select().from(table.konyvek).where(eq(table.konyvek.id, id))
    return results;
};

export const deletebook = async (id) => {
    await db.delete(table.konyvek).where(eq(table.konyvek.id, id))
};

export const addbook = async (cim, szerzo, leiras) => {
    await db.insert(table.konyvek).values({ cim, szerzo, leiras }).returning();
};