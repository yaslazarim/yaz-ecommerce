import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import bag1 from "../assets/bag-1.jpg";
import bag2 from "../assets/bag-2.jpg";
import bag3 from "../assets/bag-3.jpg";
import bag4 from "../assets/bag-4.jpg";
import bag5 from "../assets/bag-5.jpg";
import bag6 from "../assets/bag-6.jpg";

const products: Product[] = [
  {
    id: 1,
    image: bag1,
    name: "Bolsa Rosa Delicada",
    description: "Bolsa de crochê feita à mão em tons suaves de rosa e creme",
    price: "R$ 150,00",
  },
  {
    id: 2,
    image: bag2,
    name: "Bolsa Coral Verão",
    description: "Perfeita para os dias quentes, em tons coral vibrante",
    price: "R$ 165,00",
  },
  {
    id: 3,
    image: bag3,
    name: "Bolsa Pêssego",
    description: "Design artesanal com cores suaves e acabamento impecávelhsuahsuahsuahsuahsuahsuashuahsuahsuahsuahsuahsuahsuashu",
    price: "R$ 180,00",
  },
  {
    id: 4,
    image: bag4,
    name: "Bolsa Mini Pink",
    description: "Compacta e charmosa, ideal para passeios",
    price: "R$ 120,00",
  },
  {
    id: 5,
    image: bag5,
    name: "Bolsa Bucket Rose",
    description: "Estilo bucket bag com toque artesanal único",
    price: "R$ 175,00",
  },
  {
    id: 6,
    image: bag6,
    name: "Bolsa Grande Pêssego",
    description: "Espaçosa e elegante para o dia a dia",
    price: "R$ 195,00",
  },
];

export type Product = {
  id: number,
  image: StaticImageData,
  name: string,
  description: string,
  price: string,
}


export default function ProductGrid() {
  return (
    <section className="py-12 w-[100%]">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-[#23192d] mb-2">
          Nossa Coleção
        </h2>
        <p className="text-[#392B52]">
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
