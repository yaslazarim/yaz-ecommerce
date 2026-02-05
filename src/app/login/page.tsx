"use client";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";


export default function LoginPage() {
  return (

    <div className="flex items-center justify-center bg-app min-h-screen w-full">
      <div className="flex flex-col">
        <div className="mb-6">
          <Link href="/" className="flex gap-2 items-center">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-muted font-medium text-sm">Voltar à loja</span>
          </Link>
        </div>
        <div className="bg-surface rounded-lg border border-default shadow-sm">
          <div className="flex flex-col items-center p-6 pb-2 text-center">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-main">Área Restrita</h3>
            <span className="text-sm text-muted mt-1">Acesso ao painel administrativo</span>
          </div>

          <form className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-main">Usuário</label>
              <input type="username" placeholder="Digite seu usuário" className="w-full h-10 rounded-md border border-default bg-app text-sm px-3 py-2 mt-2" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-main">Senha</label>
              <input type="password" placeholder="Digite sua senha" className="w-full h-10 rounded-md border border-default bg-app text-sm px-3 py-2 mt-2" />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center w-full gap-2 bg-brand text-white text-sm rounded-md font-medium h-10 cursor-pointer hover:bg-accent transition-colors duration-300"
            >
              Entrar
            </button>

          </form>
        </div>

        <p className="text-center text-xs text-muted mt-6">
          YAZ Bolsas Artesanais © {new Date().getFullYear()}
        </p>
      </div>



    </div>
  )
}