"use client";
import { useState } from "react";


export default function ProductQuantity() {
    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity(q => q + 1);
    const decrease = () => setQuantity(q => (q > 1 ? q - 1 : q));

    return (

        <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
            <button onClick={decrease} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-r border-gray-300">
                <i className="fa-solid fa-minus"></i>
            </button>
            <span className="px-3 text-sm font-medium text-center w-8">{quantity}</span>
            <button onClick={increase} className="flex items-center justify-center w-6 h-6 text-xs font-thin transition-colors hover:bg-[#cfc58c] border-l border-gray-300">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}