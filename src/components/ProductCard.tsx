'use client';

import Image from "next/image";
import { Product } from "./ProductGrid";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white w-[360px] h-[520px] rounded-2xl cursor-pointer">
      <Link href={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-t-2xl">
          <Image
            src={product.image}
            alt="Bolsa Crochê"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="p-3 flex flex-col gap-4">
          <div className="flex flex-col gap-[4px]">
            <h3 className="text-[#392B52] font-bold text-[20px] cursor-pointer">
              {product.name}
            </h3>
            <p className="text-[#392B52] text-[14px] h-10 overflow-hidden text-ellipsis line-clamp-2">
              {product.shortDescription}
            </p>

          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between p-3">
        <span className="text-[#fd0a54] text-xl font-bold">{product.price}</span>
        <button onClick={() => addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        })} className="bg-[#fd0a54] text-white rounded-[14px] font-semibold h-10 px-4 py-2 cursor-pointer hover:bg-[#eb1253] transition-colors duration-300">
          Adicionar ao carrinho
        </button>
      </div>
    </div>

  );
}
