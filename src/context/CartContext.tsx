"use client";

import { createContext, useState } from "react";
import { StaticImageData } from "next/image";

interface Product {
    id: number;
    name: string;
    price: string;
    quantity: number;
    image: StaticImageData;
}

// Diz o que o carrinho pode fazer
export interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    quantity: number;
    increase: () => void;
    decrease: () => void;
}

// Pacotes de propriedades (children = Header, Main, Footer) que vai envolver o contexto do carrinho. 
interface CartProviderProps {
    children: React.ReactNode;
}

//Cria o contexto do carrinho queserá usado pelos componentes
export const CartContext = createContext<CartContextType>({} as CartContextType);

//Gerente do contexto do carrinho. Decide como os productos são adicionados, removidos e limpos do carrinho.
export const CartProvider = ({ children }: CartProviderProps) => {
    // Estado do carrinho
    const [cartItems, setCart] = useState<Product[]>([]);
    const [quantity, setQuantity] = useState(1);
    const increase = () => setQuantity(q => q + 1);
    const decrease = () => setQuantity(q => (q > 1 ? q - 1 : q));


    const addToCart = (product: Product) =>{
        // Verifica se o produto já está no carrinho
        setCart(prev => {
            const existingProducts = prev.find(item => item.id === product.id);
            // Se já existe, atualiza a quantidade
            if(existingProducts){
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            }
            // Se não existe, adiciona o novo produto
            return [...prev, product];
        });
    }

    const removeFromCart = (id : number) =>{
        // Cria uma nova lista sem o produto removido
        setCart(prev => prev.filter(item => item.id !== id))
    }
    //Diz para o react que os componentes filhos podem acessar o contexto do carrinho
    return (
        <CartContext.Provider value ={{ cartItems, addToCart, removeFromCart , quantity, increase, decrease }}>
            {children}
        </CartContext.Provider>
    );
}

