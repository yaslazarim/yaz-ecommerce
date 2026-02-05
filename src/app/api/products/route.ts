import { ProductFormData } from "@/entities/product.entity";
import { ProductRepository } from "@/repositories/product.repository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const product: ProductFormData = await request.json();

        const repo = new ProductRepository();

        await repo.createProduct(product, 1);

        return NextResponse.json({
            message: "Produto cadastrado com sucesso!",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json({
            message: "Erro ao cadastrar produto",
        });
    }
}
