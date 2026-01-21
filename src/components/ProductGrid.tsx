import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import bag1 from "../assets/bag-1.jpg";
import bag2 from "../assets/bag-2.jpg";
import bag3 from "../assets/bag-3.jpg";
import bag4 from "../assets/bag-4.jpg";
import bag5 from "../assets/bag-5.jpg";
import bag6 from "../assets/bag-6.jpg";
export { products };

const products: Product[] = [
  {
    id: 1,
    image: bag1,
    name: "Bolsa Rosa Delicada",
    shortDescription: "Feita com a paciência do crochê e a suavidade do toque. Uma peça para a alma.",
    description:
      "Bolsa de crochê feita à mão com fios de alta qualidade, em tons suaves de rosa e creme. Possui acabamento delicado, detalhes finos e alça confortável, perfeita para complementar looks românticos e elegantes em qualquer ocasião.",
    characteristics: [
      "Fio Premium",
      "Ponto Fechado",
      "Acabamento delicado",
      "Alça de ombro confortável",
    ],
    material: "Barbante 100% algodão",
    dimensions: "35cm x 28cm x 12cm",
    weight: "800g",
    color: "Rosa e Creme",
    price: 150,
  },
  {
    id: 2,
    image: bag2,
    name: "Bolsa Coral Verão",
    shortDescription: "Criada para carregar a leveza dos seus dias. Um pedacinho de sol feito à mão.",
    description:
      "Bolsa artesanal em tons vibrantes de coral, ideal para os dias quentes. Com textura exclusiva de crochê e acabamento resistente, combina praticidade e estilo, sendo perfeita para passeios, praias ou encontros descontraídos com um toque de cor.",
    characteristics: [
      "Fio Náutico resistente",
      "Ideal para o verão",
      "Textura exclusiva",
      "Fácil de limpar",
    ],
    material: "Náutico 100% Poliéster",
    dimensions: "35cm x 28cm x 12cm",
    weight: "800g",
    color: "Coral e Branco",
    price: 165,
  },
  {
    id: 3,
    image: bag3,
    name: "Bolsa Pêssego",
    shortDescription: "Nascida da arte manual, com cada ponto feito com calma e dedicação.",
    description:
      "Bolsa de crochê feita à mão, com design artesanal sofisticado e cores suaves que remetem à delicadeza do pêssego. Seu acabamento impecável e detalhes bem trabalhados tornam-na perfeita para complementar looks casuais e elegantes.",
    characteristics: [
      "Design Estruturado",
      "Fio de Malha Leve",
      "Acabamento impecável",
      "Alça ajustável",
    ],
    material: "Barbante 100% algodão",
    dimensions: "35cm x 28cm x 12cm",
    weight: "800g",
    color: "Salmão e Creme",
    price: 180,
  },
  {
    id: 4,
    image: bag4,
    name: "Bolsa Mini Pink",
    shortDescription: "O charme delicado de uma peça mini. Perfeita para te acompanhar em cada passo.",
    description:
      "Bolsa compacta e charmosa, ideal para passeios ou eventos sociais. Produzida em crochê artesanal com fio resistente, possui alça prática e acabamento detalhado, sendo perfeita para quem busca estilo e praticidade em uma peça pequena e elegante.",
    characteristics: [
      "Mini Bag",
      "Fio firme e resistente",
      "Alça Transversal (Corrente/Couro)",
      "Fecho magnético",
    ],
    material: "Barbante 100% algodão",
    dimensions: "30cm x 20cm x 10cm",
    weight: "600g",
    color: "Rosa Pink",
    price: 120,
  },
  {
    id: 5,
    image: bag5,
    name: "Bolsa Bucket Rose",
    shortDescription: "Um modelo que une o clássico ao toque artesanal que amamos.",
    description:
      "Estilo bucket bag com toque artesanal único, feita à mão em crochê com detalhes sofisticados. Espaçosa o suficiente para itens essenciais do dia a dia, combina modernidade e tradição artesanal, destacando-se em qualquer look casual ou elegante.",
    characteristics: [
      "Estilo Bucket",
      "Ponto Relevo de textura",
      "Base e forro reforçados",
      "Fechamento por cordão",
    ],
    material: "Barbante 100% algodão",
    dimensions: "32cm x 25cm x 15cm",
    weight: "700g",
    color: "Rosa e Creme",
    price: 175,
  },
  {
    id: 6,
    image: bag6,
    name: "Bolsa Grande Pêssego",
    shortDescription: "Espaço para tudo o que importa, sem perder a beleza e a ternura do trabalho manual.",
    description:
      "Bolsa grande, elegante e espaçosa, ideal para o uso diário. Produzida em crochê artesanal com acabamento refinado, oferece praticidade sem perder o estilo, sendo perfeita para transportar objetos com segurança e sofisticação.",
    characteristics: [
      "Maxi Bag",
      "Fio Grosso Estruturado",
      "Amplo espaço interno",
      "Crochê artesanal refinado",
    ],
    material: "Barbante 100% algodão",
    dimensions: "40cm x 30cm x 15cm",
    weight: "900g",
    color: "Pêssego e Creme",
    price: 195,
  },
];


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
  price: number,
}

export async function getProducts(id: string) {
  return products.find(product => product.id === parseInt(id) || null);
}


export default function ProductGrid() {
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
