import ProductQuantity from "@/components/ui/ProductQuantity";
import { getProducts } from "@/components/ProductGrid";
import Image from "next/image";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { formatPrice } from "@/utils";
import { GetServerSideProps } from 'next';


type ProductPageProps = {
    params: Promise<{
        id: string;
    }>
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProducts(id);

    if (!product) {
        return <div>Produto não encontrado</div>
    }

    return (
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
                    <div className="flex flex-col md:text-left gap-1 md:gap-2 md:w-full border-b border-b-[#cfc58c]">
                        <h1 className="text-3xl lg:text-4xl font-bold text-[rgb(57,43,82)] mb-2">{product.name}</h1>
                        <p className="text-[#392B52] italic font-light">{product.shortDescription}</p>
                        <span className="text-4xl font-bold text-[#fd0a54] mt-6 mb-6">{formatPrice(product.price)}</span>
                    </div>

                    <div className="flex items-center mt-6 gap-2">
                        <span className="text-[#392B52] text-sm">Quantidade:</span>
                        <ProductQuantity />
                    </div>
                    <div className="mt-5 mb-6">
                        <p className="text-[#392B52] text-xs">Artesanal e sob encomenda: sem estoque disponível. <br /> Prazo de produção: 10 a 20 dias.</p>
                    </div>

                    <div className="mt-10">
                        <AddToCartButton
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    </div>

                </div>

            </div>

            <hr className="bg-[#cfc58c] h-[2px] m-5 border-none my-10 max-w-6xl mx-auto w-full" />

            <div className="flex flex-col max-w-6xl mx-auto itens-center md:items-start">
                <div className="flex flex-col gap-2.5 md:gap-10 w-full">
                    <div>
                        <h3 className="text-2xl font-bold text-[rgb(57,43,82)] mb-2">Sobre o produto</h3>
                        <p className="text-[#392B52]">{product.description}</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-[rgb(57,43,82)] mb-2">Características</h1>

                        <ul className="list-disc pl-5 space-y-1 marker:text-[#fd0a54]">
                            {product.characteristics.map((item, index) => (
                                <li key={index} className="text-[#392B52]">
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                <hr className="bg-[#cfc58c] h-[2px] m-5 border-none my-10 max-w-6xl mx-auto w-full" />


                <div className="max-w-6xl mx-auto w-full">
                    <h1 className="text-2xl font-bold text-[rgb(57,43,82)] mb-2">Especificações</h1>
                    <div className="flex justify-between py-3 border-b border-b-[#cfc58c]">
                        <h4 className="text-xl font-semibold text-[rgb(57,43,82)] mb-2">Material: </h4>
                        <p className="text-[#392B52]">{product.material}</p>
                    </div>

                    <div className="flex justify-between py-3 border-b border-b-[#cfc58c]">
                        <h4 className="text-xl font-semibold text-[rgb(57,43,82)] mb-2">Dimensões: </h4>
                        <p className="text-[#392B52]">{product.dimensions}</p>
                    </div>

                    <div className="flex justify-between py-3 border-b border-b-[#cfc58c]">
                        <h4 className="text-xl font-semibold text-[rgb(57,43,82)] mb-2">Peso: </h4>
                        <p className="text-[#392B52]">{product.weight}</p>
                    </div>

                    <div className="flex justify-between py-3 border-b border-b-[#cfc58c]">
                        <h4 className="text-xl font-semibold text-[rgb(57,43,82)] mb-2">Cor: </h4>
                        <p className="text-[#392B52]">{product.color}</p>
                    </div>

                </div>

            </div>
        </section>
    )
}
