import { CartItem } from "@/entities/cartItem.entity";
import { formatPrice } from ".";

const whatsapp_number = "5548996624709";

export function handleWhatsappMessage(cartItems:CartItem[], totalPrice: number) {

    console.log("Cart Items in WhatsappMessage:", cartItems, totalPrice);

    const message = `https://wa.me//${whatsapp_number}?text=${encodeURIComponent(
        `Olá, gostaria de finalizar minha compra:\n\n` +
        cartItems.map(item => `- ${item.name} (Quantidade: ${item.quantity}) - R$ ${item.price.toFixed(2)}`).join('\n') +
        `\n\nTotal: ${formatPrice(totalPrice)}`
    )}`;

    window.open(message, '_blank');
}