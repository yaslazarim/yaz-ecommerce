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
    <header className=" sticky top-0 flex justify-between items-center h-[65px] w-full pr-[20px] pl-[20px] bg-surface border-b border-default">
      <div>
        <Link href="/">
          <h1 className="text-3xl text-brand font-bold cursor-pointer">YAZ</h1>
        </Link>
      </div>
      <div className="flex gap-1 items-center">
        <Link href="/cartPage">
          <button className="group relative mx-1 flex items-center cursor-pointer hover:bg-accent transition-colors duration-300 p-1 rounded">
            <ShoppingCart className="h-4 w-4 m-2 text-main group-hover:text-white" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </Link>

        <Link href="/admin">
          <button className="group mx-1 flex items-center cursor-pointer hover:bg-accent transition-colors duration-300 p-1 rounded">
            <User className="text-main h-4 w-4 m-2 group-hover:text-white"></User>
          </button>
        </Link>
      </div>
    </header>
  );
}
