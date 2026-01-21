"use client";
import Image from "next/image";

export default function RegisteredProductItem({ product }) {
    
    if (!product) {
        return(
            <div className="mt-5">
                <p className="text-main font-semibold">Nenhum produto cadastrado</p>
            </div>
        )
    }
  
    return (
    <div className="bg-surface border-default border rounded-[10px] p-3 flex items-center gap-4">

      <Image
        src={product.image}
        alt={product.name}
        width={60}
        height={60}
        className="rounded-md"
      />

      <div className="flex-1">
        <p className="font-semibold text-main">{product.name}</p>
        <p className="text-sm text-muted line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="text-brand font-bold">
          R$ {product.price},00
        </p>
      </div>

    </div>
  );
}
