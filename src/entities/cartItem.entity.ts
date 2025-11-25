import { StaticImageData } from "next/image";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: StaticImageData;
}