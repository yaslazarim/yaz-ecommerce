import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { ProductFormData } from "@/entities/product.entity";
import { MySql2Database } from "drizzle-orm/mysql2";

export class ProductRepository {
    private readonly database: MySql2Database;

    constructor() {
        this.database = db;
    }

    async createProduct(product: ProductFormData, userId: number) {
        return await this.database.insert(productsTable).values({
            description: product.description,
            dimensions: product.dimensions,
            imageLink: product.imageLink,
            material: product.material,
            name: product.name,
            price: product.price,
            shortDescription: product.shortDescription,
            userId: userId,
            weight: product.weight,
        });
    }

    async getProducts(){
        return await this.database.select().from(productsTable)
    }
}
