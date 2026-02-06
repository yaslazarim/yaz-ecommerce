"use client";

import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";



export type Product = {
  id: number,
  imageLink: string,
  name: string,
  shortDescription: string,
  description: string,
  material: string,
  dimensions: string,
  weight: string,
  price: number,
}


export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json(); 
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    loadProducts();
  }, [])

  return (
    <section className="py-12 w-[100%]">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-main mb-2">
          Nossa Coleção
        </h2>
        <p className="text-muted">
          Bolsas artesanais feitas com amor e dedicação
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-6">
        {products.map((product, id) =>
          <ProductCard key={id} product={product} />
        )}
      </div>
    </section>
  );
}
