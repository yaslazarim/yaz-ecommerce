'use client'

import { CartContext, CartContextType } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const { cartItems } = useContext<CartContextType>(CartContext);

  const [totalItems, setTotalItems] = useState(0);


  useEffect(() => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(itemCount);
  }, [cartItems]);


  return (
    <header className=" sticky top-0 flex justify-between items-center h-[65px] w-full pr-[20px] pl-[20px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div>
        <Link href="/">
          <h1 className="text-3xl text-[#fd0a54] font-bold cursor-pointer">YAZ</h1>
        </Link>
      </div>
      <div className="flex gap-3">
        <Link href="/cartPage">
          <button className="mx-2 flex items-center cursor-pointer">
            <i className="text-[#23192d] text-[14px] fa-solid fa-cart-shopping">{totalItems}</i>
          </button>
        </Link>

        <button className="mx-2 flex items-center cursor-pointer">
          <i className="text-[#23192d] text-[14px] fa-solid fa-user"></i>
        </button>
      </div>
    </header>
  );
}
