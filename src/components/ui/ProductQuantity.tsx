"use client";
import { CartContext, CartContextType } from "@/context/CartContext";
import { CartItem } from "@/entities/cartItem.entity";
import { useContext } from "react";

type ProductQuantityProps = {
    item?: CartItem,
}

export default function ProductQuantity({ item }: ProductQuantityProps) {
    const {
        addToCart,
        removeQuantityOfItemFromCart,
        cartItems,
        productPageDecreaseQuantity,
        productPageIncreaseQuantity,
        productPageQuantity,
    } = useContext<CartContextType>(CartContext)

    if (!item) {
        return (
            <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
                <button onClick={productPageDecreaseQuantity} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-r border-gray-300">
                    <i className="fa-solid fa-minus"></i>
                </button>
                <span className="px-3 text-xs font-medium text-center w-8">{productPageQuantity}</span>
                <button onClick={productPageIncreaseQuantity} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-l border-gray-300">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        )
    }

    const findedItemFromCart = cartItems.find(({ id }) => id === item.id)
    return (
        <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
            <button onClick={() => removeQuantityOfItemFromCart(item)} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-r border-gray-300">
                <i className="fa-solid fa-minus"></i>
            </button>
            <span className="px-3 text-xs font-medium text-center w-8">{findedItemFromCart?.quantity ?? 1}</span>
            <button onClick={() => {
                addToCart(item)
            }} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-l border-gray-300">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}