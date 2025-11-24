"use client";
import { CartContext, CartContextType } from "@/context/CartContext";
import { useContext } from "react";


export default function ProductQuantity() {

    const {quantity, increase, decrease} = useContext<CartContextType>(CartContext)
    return (

        <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
            <button onClick={decrease} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-r border-gray-300">
                <i className="fa-solid fa-minus"></i>
            </button>
            <span className="px-3 text-xs font-medium text-center w-8">{quantity}</span>
            <button onClick={increase} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-l border-gray-300">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}