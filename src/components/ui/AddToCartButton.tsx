"use client";
import { useContext } from "react";
import { CartContext, CartContextType } from "@/context/CartContext";
import { StaticImageData } from "next/image";

interface AddToCartProps {
    id: number;
    name: string;
    price: string;
    image: StaticImageData;
}

export default function AddToCartButton({
    id,
    name,
    price,
    image
}: AddToCartProps) {
    const { addToCart, quantity } = useContext(CartContext) as CartContextType;

    const handleAddToCart = () => {
        addToCart({ id, name, price, quantity, image });
    }

    return (
        <button
            className="bg-[#fd0a54] rounded-[10px] text-[14px] font-semibold px-24 py-2.5 text-amber-50 cursor-pointer"
            onClick={handleAddToCart}>
            <i className="text-amber-50 text-[14px] pr-8 fa-solid fa-cart-shopping"></i>
            Adicionar ao Carrinho
        </button>
    )
}

