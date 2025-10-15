import Image from "next/image";
import { Product } from "./ProductGrid";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white w-[360px] h-[520px] rounded-2xl">
      <div>
        <Image
          src={product.image}
          alt="Bolsa Crochê"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-3 flex flex-col gap-4">
        <div className="flex flex-col gap-[4px]">
        <h3 className="text-[#392B52] font-bold text-[20px]">
          {product.name}
        </h3>
        <p className="text-[#392B52] text-[14px] min-h-10 overflow-hidden text-ellipsis">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
        <span className="text-[#fd0a54] text-xl font-bold">{product.price}</span>
        <button className="bg-[#fd0a54] text-white rounded-[14px] font-semibold h-10 px-4 py-2">
          Adicionar ao carrinho
        </button>
      </div>
      </div>
      
    </div>
  );
}
