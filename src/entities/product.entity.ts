import { StaticImageData } from "next/image";

export type Product = {
    id: number,
    image: StaticImageData,
    name: string,
    shortDescription: string,
    description: string,
    characteristics: string[],
    material: string,
    dimensions: string,
    weight: string,
    color: string,
    price: string,
}