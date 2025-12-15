"use client";
import { useContext } from "react";
import { CartContext, CartContextType } from "@/context/CartContext";
import { StaticImageData } from "next/image";
import { ShoppingCart } from "lucide-react";

interface AddToCartProps {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
}

export default function AddToCartButton({
    id,
    name,
    price,
    image
}: AddToCartProps) {
    const { addToCart, productPageQuantity, resetProductPageQuantity } = useContext(CartContext) as CartContextType;

    const handleAddToCart = () => {
        addToCart({ id, name, price, quantity: productPageQuantity, image });
        resetProductPageQuantity()
    }

    return (
        <button
            className=" flex gap-2 items-center  bg-[#fd0a54] rounded-[10px] text-[14px] font-semibold px-24 py-2.5 text-amber-50 cursor-pointer"
            onClick={handleAddToCart}>
            <ShoppingCart className="text-amber-50 h-4 w-4"></ShoppingCart>
            Adicionar ao Carrinho
        </button>
    )
}

