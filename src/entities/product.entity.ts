import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    image: StaticImageData;
    name: string;
    shortDescription: string;
    description: string;
    material: string;
    dimensions: string;
    weight: string;
    color: string;
    price: string;
};

export interface ProductFormData extends Product {
    imageLink: string;
}
