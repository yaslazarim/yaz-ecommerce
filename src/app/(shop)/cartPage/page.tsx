"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext, CartContextType } from "@/context/CartContext";
import ProductQuantity from "@/components/ui/ProductQuantity";
import { formatPrice } from "@/utils";
import { handleWhatsappMessage } from "@/utils/WhatsappCheckout";
import { Trash } from "lucide-react";

export default function CartPage() {
    const { cartItems, removeFromCart } = useContext(CartContext) as CartContextType;
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setTotalItems(itemCount);
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        setTotalPrice(totalPrice)
    }, [cartItems, totalPrice]);

    if (cartItems.length === 0) {
        return (
            <section className="bg-app min-h-screen flex flex-col items-center justify-center text-main">
                <h1 className="text-3xl font-bold mb-6">Seu carrinho está vazio 😢</h1>
                <Link href="/">
                    <button className="bg-brand  cursor-pointer text-white px-6 py-2 rounded-md hover:bg-accent transition-colors duration-300">
                        Voltar às compras
                    </button>
                </Link>
            </section>
        )
    }

    return (
        <section className="flex justify-center bg-app min-h-screen">
            <div className="container p-12">
                <h1 className="text-4xl font-bold mb-8 text-main">Meu Carrinho</h1>

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        {cartItems.map(item => (
                            <div
                                key={item.id}
                                className=" rounded-lg border border-default text-main shadow-sm p-4 bg-surface">

                                <div className="flex gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="rounded-md"
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <p>{item.name}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="inline-flex items-center justify-center text-danger gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer">
                                                <Trash className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <span className="text-xl font-bold text-brand">{formatPrice(item.price)}</span>
                                        <div className="flex items-center mt-3.5">
                                            <ProductQuantity item={
                                                { ...item, quantity: 1 }
                                            } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-lg border border-default bg-surface text-card-foreground shadow-sm p-6 w-full md:w-1/3 md:sticky top-24">
                        <h2 className="text-2xl font-bold mb-6 text-main">Resumo do Pedido</h2>
                        <div className="flex justify-between text-lg font-bold mb-6">
                            <p className="text-main">Total ({totalItems} itens)</p>
                            <span className="text-brand">{formatPrice(totalPrice)}</span>
                        </div>

                        <div className="bg-field/50 border border-default rounded-lg p-4 mb-4">
                            <p className="text-xs text-muted text-center">
                                💬 Ao clicar em &quot;Finalizar Compra&quot;, você será redirecionado ao WhatsApp para concluir seu pedido
                            </p>
                        </div>


                        <div className="flex flex-col border rounded-lg border-default bg-surface p-4 mt-6 text-main text-sm gap-3">
                            <h3 className="font-semibold">💳 Formas de Pagamento</h3>
                            <div>
                                <p>• Pix</p>
                                <p>• Cartão de crédito</p>
                                <p>• Cartão de débito</p>

                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 w-full mt-4">
                            <button 
                                onClick={() => handleWhatsappMessage(cartItems, totalPrice)}
                                className="bg-brand rounded-[10px] text-[14px] w-full py-2.5 text-amber-50 cursor-pointer hover:bg-accent transition-colors duration-300">
                                    Finalizar compra
                            </button>
                            <Link href="/" className="w-full">
                                <button className="bg-app rounded-[10px] text-[14px] text-black w-full py-2.5 cursor-pointer">Continuar comprando</button>
                            </Link>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}