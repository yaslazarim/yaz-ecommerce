import {
    mysqlTable,
    serial,
    varchar,
    int,
    bigint,
} from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users", {
    id: serial("id").primaryKey(),
    username: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
});

export const productsTable = mysqlTable("products", {
    id: serial("id").primaryKey(),
    imageLink: varchar("imageLink", { length: 255 }).notNull(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    shortDescription: varchar("shortDescription", { length: 80 }).notNull(),
    description: varchar("description", { length: 255 }).notNull(),
    material: varchar("material", { length: 255 }).notNull(),
    dimensions: varchar("dimensions", { length: 255 }).notNull(),
    weight: varchar("weight", { length: 15 }).notNull(),
    price: int("price").notNull(),
    userId: bigint("userId", { mode: "number", unsigned: true })
        .notNull()
        .references(() => usersTable.id),
});
