'use client'

import { CartContext, CartContextType } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

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
      <div className="flex gap-3 items-center">
        <Link href="/cartPage">
          <button className="mx-2 flex items-center cursor-pointer">
            <ShoppingCart className="text-[#23192d] h-5 w-5 m-2"/>{totalItems}
          </button>
        </Link>

      <Link href="/admin">
        <button className="mx-2 flex items-center cursor-pointer">
          <User className="text-[#23192d] h-5 w-5"></User>
        </button>
      </Link>
      </div>
    </header>
  );
}
