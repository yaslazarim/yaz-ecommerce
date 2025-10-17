import { getProducts } from "@/components/ProductGrid";
import Image from "next/image";


type ProductPageProps = {
    params: Promise<{
        id: string;
    }>
}

export default async function ProdutoPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProducts(id);

    if (!product) {
        return <div>Produto não encontrado</div>
    }

    return(
        <section className="flex flex-col bg-[#f5ecb7] min-h-screen px-4 py-10">
            <div className="flex flex-row gap-10 md:gap-20 max-w-6xl mx-auto itens-center md:items-start">
                <div className="rounded-lg overflow-hidden w-full md:w-4/5 h-90 md:h-[700px] shadow-lg">
                    <Image
                        src={product.image}
                        alt="{product.name}"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="flex flex-col md:text-left gap-1 md:gap-2 md:w-full px-2">
                        <h1 className="text-3xl lg:text-4xl font-bold text-[rgb(57,43,82)] mb-2">{product.name}</h1>
                        <p className="text-[#392B52]">{product.shortDescription}</p>
                        <span className="text-4xl font-bold text-[#fd0a54] mt-6 mb-4">{product.price}</span>
                    </div>
                
                    <div>
                        <p className="text-[#392B52]">Quantidade</p>
                    </div>

                    <div>
                        <button className="bg-[#fd0a54] rounded-[10px] text-[14px] font-semibold px-24 py-2.5 text-amber-50 cursor-pointer"> 
                            <i className="text-amber-50 text-[14px] pr-8 fa-solid fa-cart-shopping"></i>
                            Adicionar ao Carrinho</button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-[rgb(57,43,82)] mb-2">Descrição</h3>
                <p className="text-[#392B52]">{product.description}</p>
                <h4 className="text-xl font-bold text-[rgb(57,43,82)] mb-2">Características</h4>
                <p className="text-[#392B52]">{product.characteristics}</p>
                <h4 className="text-xl font-bold text-[rgb(57,43,82)] mb-2">Material</h4>
                <p className="text-[#392B52]">{product.material}</p>
                <h4 className="text-xl font-bold text-[rgb(57,43,82)] mb-2">Dimensões</h4>
                <p className="text-[#392B52]">{product.dimensions}</p>
                <h4 className="text-xl font-bold text-[rgb(57,43,82)] mb-2">Peso</h4>
                <p className="text-[#392B52]">{product.weight}</p>
                <h4 className="text-xl font-bold text-[rgb(57,43,82)] mb-2">Cor</h4>
                <p className="text-[#392B52]">{product.color}</p>
            </div>
        </section>
    )
}
