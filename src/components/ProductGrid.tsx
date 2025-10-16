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
    description: "Bolsa de crochê feita à mão com fios de alta qualidade, em tons suaves de rosa e creme. Possui acabamento delicado, detalhes finos e alça confortável, perfeita para complementar looks românticos e elegantes em qualquer ocasião.",
    price: "R$ 150,00",
  },
  {
    id: 2,
    image: bag2,
    name: "Bolsa Coral Verão",
    description: "PBolsa artesanal em tons vibrantes de coral, ideal para os dias quentes. Com textura exclusiva de crochê e acabamento resistente, combina praticidade e estilo, sendo perfeita para passeios, praias ou encontros descontraídos com um toque de cor.",
    price: "R$ 165,00",
  },
  {
    id: 3,
    image: bag3,
    name: "Bolsa Pêssego",
    description: "Bolsa de crochê feita à mão, com design artesanal sofisticado e cores suaves que remetem à delicadeza do pêssego. Seu acabamento impecável e detalhes bem trabalhados tornam-na perfeita para complementar looks casuais e elegantes.",
    price: "R$ 180,00",
  },
  {
    id: 4,
    image: bag4,
    name: "Bolsa Mini Pink",
    description: "Bolsa compacta e charmosa, ideal para passeios ou eventos sociais. Produzida em crochê artesanal com fio resistente, possui alça prática e acabamento detalhado, sendo perfeita para quem busca estilo e praticidade em uma peça pequena e elegante.",
    price: "R$ 120,00",
  },
  {
    id: 5,
    image: bag5,
    name: "Bolsa Bucket Rose",
    description: "Estilo bucket bag com toque artesanal único, feita à mão em crochê com detalhes sofisticados. Espaçosa o suficiente para itens essenciais do dia a dia, combina modernidade e tradição artesanal, destacando-se em qualquer look casual ou elegante.",
    price: "R$ 175,00",
  },
  {
    id: 6,
    image: bag6,
    name: "Bolsa Grande Pêssego",
    description: "Bolsa grande, elegante e espaçosa, ideal para o uso diário. Produzida em crochê artesanal com acabamento refinado, oferece praticidade sem perder o estilo, sendo perfeita para transportar objetos com segurança e sofisticação.",
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

export function getProducts(id:string) {
  return products.find(product => product.id === parseInt(id) || null);
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
