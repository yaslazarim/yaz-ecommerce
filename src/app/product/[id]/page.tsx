import { getProducts } from "@/components/ProductGrid";
import Image from "next/image";


type ProductPageProps = {
    params: Promise<{
        id: string;
    }>
}

export default async function ProdutoPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getProducts(id);

    if (!product) {
        return <div>Produto não encontrado</div>
    }

    return(
        <section className="flex bg-[#f5ecb7] min-h-screen px-4 py-10">
            <div className="flex flex-row gap-10 md:gap-20 max-w-6xl mx-auto itens-center md:items-start">
                <div className="rounded-lg overflow-hidden w-full md:w-1/2 h-64 sm:h-80 md:h-[500px] mr-0 md:mr-8">
                    <Image
                        src={product.image}
                        alt="{product.name}"
                        className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
                    />
                </div>
                <div className="flex flex-col md:text-left gap-1 md:gap-2 w-full md:w-1/2 px-2">
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#392B52] mb-2">{product.name}</h1>
                    <p className="text-[#392B52]">{product.description}</p>
                    <span className="text-4xl font-bold text-[#fd0a54] mt-6 mb-4">{product.price}</span>
                </div>

            </div>
        </section>
    )
}
