"use client";
import { ArrowLeft, LogOut, Plus, Trash } from "lucide-react";
import Link from "next/link";
import RegisteredProductItem from "@/components/ui/RegisteredProductItem";
import { useForm } from "react-hook-form";
import { ProductFormData } from "@/entities/product.entity";

export default function AdmPage() {
    const {
        register /*conecta os inputs ao react hook form*/,
        handleSubmit /*controla o envio do formulario*/,
        reset,
    } = useForm<ProductFormData>();

    /*função chamada quando o formulário é enviado com sucesso*/
    async function onSubmit(data: ProductFormData) {
        console.log("Produto cadastrado:", data);

        await fetch("/api/products", {
            method: "POST",
            body: JSON.stringify(data),
        });

        reset();
    }

    return (
        <>
            <header className="bg-bg-surface py-4 px-6">
                <div className="flex items-center text-text-main gap-4 ">
                    <Link href="/" className="p-2">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <p className="font-bold text-2xl">Painel Administrativo</p>
                    <div className="ml-auto">
                        <LogOut className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </header>

            <div className="flex justify-center py-12">
                <div className="flex gap-6 w-full max-w-6xl items-stretch">
                    <form
                        /*previne refresh, valida dados e chama onSubmit se estiver tudo certo*/
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex-1 bg-surface rounded-lg border border-default shadow-sm pb-6 flex flex-col max-h-[720px]"
                    >
                        <div className="flex items-center gap-2 p-6 ">
                            <Plus className="h-4 w-4" />
                            <span className="text-main font-semibold text-[20px]">
                                Adicionar Novo Produto
                            </span>
                        </div>

                        <div className="p-6 pt-0 flex-1 overflow-y-auto flex flex-col gap-4">
                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Nome do produto
                                </span>

                                <input
                                    /*Conecta input ao form e faz campo ser obrigatório*/
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Ex: Bolsa Rosa Delicada"
                                    className="bg-field rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Material
                                </span>
                                <input
                                    {...register("material")}
                                    type="text"
                                    placeholder="Ex: Náutico Polipropileno"
                                    className="bg-field rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Dimensões
                                </span>
                                <input
                                    {...register("dimensions")}
                                    type="text"
                                    placeholder="Ex: 35cm x 28cm x 12cm"
                                    className="bg-field rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Peso
                                </span>
                                <input
                                    {...register("weight")}
                                    type="text"
                                    placeholder="Ex: 800g"
                                    className="bg-field rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Preço
                                </span>
                                <input
                                    {...register("price", { required: true })}
                                    type="text"
                                    placeholder="Ex: R$150,00"
                                    className="bg-field rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Link da Imagem
                                </span>
                                <input
                                    {...register("imageLink")}
                                    type="text"
                                    placeholder="Ex: 800g"
                                    className="bg-field rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Breve descrição
                                </span>
                                <textarea
                                    {...register("shortDescription", {
                                        required: true,
                                    })}
                                    placeholder="Ex: Descreva brevemente o produto"
                                    className="bg-field rounded-md px-3 py-2 h-16 resize-y"
                                />
                            </div>

                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-main">
                                    Descrição
                                </span>
                                <textarea
                                    {...register("description", {
                                        required: true,
                                    })}
                                    placeholder="Ex: Descreva o produto"
                                    className="bg-field rounded-md px-3 py-2 h-28 resize-y"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-brand px-24 text-white rounded-[10px] font-semibold h-10 cursor-pointer hover:bg-accent transition-colors duration-300"
                            >
                                Adicionar Produto
                            </button>
                        </div>
                    </form>

                    <div className="flex-1 bg-surface rounded-lg border border-default shadow-sm flex flex-col max-h-[720px]">
                        <div className="p-6 pb-2">
                            <span className="text-main font-semibold text-[20px]">
                                Produtos Cadastrados ({20})
                            </span>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-3">
                            {[].map((product) => (
                                <RegisteredProductItem
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
