"use client";

import { CartItem } from "@/entities/cartItem.entity";
import { createContext, useState } from "react";

// Diz o que o carrinho pode fazer
export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: number) => void;
    removeQuantityOfItemFromCart: (product: CartItem) => void;
    productPageIncreaseQuantity: () => void;
    productPageDecreaseQuantity: () => void;
    resetProductPageQuantity: () => void;
    productPageQuantity: number;
}

// Pacotes de propriedades (children = Header, Main, Footer) que vai envolver o contexto do carrinho. 
interface CartProviderProps {
    children: React.ReactNode;
}

//Cria o contexto do carrinho queserá usado pelos componentes
export const CartContext = createContext<CartContextType>({} as CartContextType);

//Gerente do contexto do carrinho. Decide como os productos são adicionados, removidos e limpos do carrinho.
export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCart] = useState<CartItem[]>([]);
    const [productPageQuantity, setProductPageQuantity] = useState(1)

    const productPageIncreaseQuantity = () => {
        setProductPageQuantity((prev) => prev + 1);
    };

    const productPageDecreaseQuantity = () => {
        setProductPageQuantity((prev) => {
            if (prev > 1) {
                return prev - 1;
            }
            return 1;
        });
    };

    const addToCart = (product: CartItem) => {
        // Verifica se o produto já está no carrinho
        setCart(prev => {
            const existingProducts = prev.find(item => item.id === product.id);
            // Se já existe, atualiza a quantidade
            if (existingProducts) {
                const newCart = prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );

                return newCart
            }
            // Se não existe, adiciona o novo produto
            return [...prev, product];
        });
    }

    const removeQuantityOfItemFromCart = (product: CartItem) => {
        // Verifica se o produto já está no carrinho
        const remove = (item: CartItem, product: CartItem) => {
            const quantity = (item.quantity - product.quantity) <= 0 ? 1 : item.quantity - product.quantity
            return { ...item, quantity }
        }

        setCart(prev => {
            const existingProducts = prev.find(item => item.id === product.id);
            // Se já existe, atualiza a quantidade
            if (existingProducts) {
                return prev.map(item =>
                    item.id === product.id ? remove(item, product) : item
                );
            }
            // Se não existe, não faz nada
            return [...prev];
        });
    }

    const resetProductPageQuantity = () => {
        setProductPageQuantity((prev) => {
            if (prev > 1) return 1

            return prev
        })
    }

    const removeFromCart = (id: number) => {
        // Cria uma nova lista sem o produto removido
        setCart(prev => prev.filter(item => item.id !== id))
    }
    //Diz para o react que os componentes filhos podem acessar o contexto do carrinho
    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            removeQuantityOfItemFromCart,
            productPageIncreaseQuantity,
            productPageDecreaseQuantity,
            resetProductPageQuantity,
            productPageQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}

