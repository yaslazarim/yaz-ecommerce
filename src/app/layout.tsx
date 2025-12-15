
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YAZ",
  description: "Loja YAZ de bolsas de crochê",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <head>
      </head>
      <html lang="pt-BR">
        <body
          className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          {children} 
        </body>
      </html>
    </>
  );
}