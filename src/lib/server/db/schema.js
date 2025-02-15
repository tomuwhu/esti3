import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    age: integer('age'),
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    admin: integer('admin').notNull().default(0)
});

export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const konyvek = sqliteTable("konyvek", {
    id: integer('id').primaryKey(),
    cim: text('cim'),
    szerzo: text('szerzo'),
    borito: text('borito'),
    link: text('link'),
    leiras: text('leiras')
});