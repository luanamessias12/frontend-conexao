"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [showMaintenance, setShowMaintenance] = useState(false);

  return (
    <>
      <header className="w-full bg-[rgb(5,11,48)] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center px-6 py-4 justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/conexao-logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-semibold">Conexão Para Todos</span>
          </div>

          <nav className="flex items-center space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">Sobre nós</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/contact" className="hover:underline">Contato</Link>
            
            <button
              onClick={() => setShowMaintenance(true)}
              className="text-white font-medium px-5 py-2 rounded-full transition bg-blue-600 hover:bg-blue-700"
            >
              Entrar
            </button>
          </nav>
        </div>
      </header>

      {showMaintenance && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-6 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Página em Manutenção</h2>
          <p className="mb-6 max-w-md">Estamos atualizando essa funcionalidade. Em breve estará disponível!</p>
          <button
            onClick={() => setShowMaintenance(false)}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Voltar ao site
          </button>
        </div>
      )}
    </>
  );
}
