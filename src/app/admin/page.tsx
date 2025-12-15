"use client";

import { getProducts } from "@/components/ProductGrid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function AdmPage() {
    return(
        <header className="bg-white">
            <div className="flex items-center text-[#231631]">
                <Link href="/">
                    <ArrowLeft className="h-5 w-5" />
                </Link>
                <p className="font-bold text-2xl">Painel Administrativo</p>

            </div>
        </header>
    )
}