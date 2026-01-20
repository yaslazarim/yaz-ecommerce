"use client";

import { getProducts } from "@/components/ProductGrid";
import { ArrowLeft, Plus, Trash } from "lucide-react";
import Link from "next/link";


export default function AdmPage() {
    return (
        <>
            <header className="bg-white py-4 px-6">
                <div className="flex items-center text-[#231631] gap-4 ">
                    <Link href="/" className="p-2">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <p className="font-bold text-2xl">Painel Administrativo</p>

                </div>
            </header>
            <section>
                <div className="flex gap-6">
                    <div className=" bg-white rounded-lg shadow-sm ">
                        <div className="flex  items-center gap-2 p-6 ">
                            <Plus className="h-4 w-4" />
                            <span className="text-[#231631] font-semibold text-[20px]">Adicionar Novo Produto</span>
                        </div>
                        <div className="p-6 pt-0 flex flex-col gap-4">
                            <div className="flex flex-col w-full  text-sm">
                                <span className="font-medium text-[#231631]">Nome do produto</span>
                                <input type="text" placeholder="Ex: Bolsa Rosa Delicada" className="bg-[#f5ecb7] rounded-md px-3 py-2" />
                            </div>

                            <div className="flex flex-col w-full  text-sm">
                                <span className="font-medium text-[#231631]">Descrição</span>
                                <textarea placeholder="Ex: Descreva o produto" className="bg-[#f5ecb7] rounded-md px-3 py-2 h-28 resize-y" />
                            </div>

                            <div className="flex flex-col w-full  text-sm">
                                <span className="font-medium text-[#231631]">Preço</span>
                                <input type="text" placeholder="Ex: R$150,00" className="bg-[#f5ecb7] rounded-md px-3 py-2" />
                            </div>

                            <div className="flex flex-col w-full text-sm">
                                <span className="font-medium text-[#231631]">Imagem</span>
                                <div className="flex gap-4">
                                    <label
                                        htmlFor="image"
                                        className="flex items-center gap-2 cursor-pointer bg-[#f5ecb7] rounded-md px-3 py-2 text-[#231631] hover:bg-[#efe29f] transition w-fit"
                                    >
                                        <Plus className="h-4 w-4" />
                                        <span>Adicionar imagem</span>
                                    </label>

                                    <input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />

                                    <Trash className="h-4 w-4 mt-2 cursor-pointer text-[#231631]" />
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-[#fd0a54] px-24 text-white rounded-[14px] font-semibold h-10 cursor-pointer hover:bg-[#eb1253] transition-colors duration-300">
                                Adicionar Produto
                            </button>
                        </div>

                    </div>


                    <div className="bg-white rounded-lg shadow-sm flex items-start gap-2">
                        <div className="p-6">
                        <span className="text-[#231631] font-semibold text-[20px]">Produtos Cadastrados</span>
                            
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}