"use client";
import { createContext, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

// Diz o que o carrinho pode fazer
interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

// Pacotes de propriedades (children = Header, Main, Footer) que vai envolver o contexto do carrinho. 
interface CartProviderProps {
    children: React.ReactNode;
}

//Cria o contexto do carrinho queserá usado pelos componentes
export const CartContext = createContext<CartContextType | null>(null);

//Gerente do contexto do carrinho. Decide como os productos são adicionados, removidos e limpos do carrinho.
export const CartProvider = ({ children }: CartProviderProps) => {
    // Estado do carrinho
    const [cartItems, setCart] = useState<Product[]>([]);

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

    const clearCart = () =>{
        setCart([]);
    }
    //Diz para o react que os componentes filhos podem acessar o contexto do carrinho
    return (
        <CartContext.Provider value ={{ cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
    ;
}

