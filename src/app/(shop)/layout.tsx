import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 
import { CartProvider } from "@/context/CartContext";

export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CartProvider>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </CartProvider>
  );
}