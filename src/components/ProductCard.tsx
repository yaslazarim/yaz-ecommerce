'use client';

import Image from "next/image";
import { Product } from "./ProductGrid";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { formatPrice } from "@/utils";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-surface w-[360px] h-[520px] border border-default shadow-sm rounded-2xl cursor-pointer">
      <Link href={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-t-2xl" suppressHydrationWarning>
          <Image
            src={product.imageLink}
            alt="Bolsa Crochê"
            width={200}
            height={200}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="p-3 flex flex-col gap-4">
          <div className="flex flex-col gap-[4px]">
            <h3 className="text-main font-bold text-[20px] cursor-pointer">
              {product.name}
            </h3>
            <p className="text-muted text-[14px] h-10 overflow-hidden text-ellipsis line-clamp-2">
              {product.shortDescription}
            </p>

          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between p-3">
        <span className="text-brand text-xl font-bold">{formatPrice(product.price)}</span>
        <button onClick={() => addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.imageLink
        })} className="bg-brand text-white rounded-[14px] font-semibold h-10 px-4 py-2 cursor-pointer hover:bg-accent transition-colors duration-300">
          Adicionar ao carrinho
        </button>
      </div>
    </div>

  );
}
