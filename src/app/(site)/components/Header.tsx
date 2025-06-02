import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="w-full bg-[rgb(5,11,48)] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/conexao-logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-semibold">Conexão Para Todos</span>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href="/about" className="hover:underline">
            Sobre nós
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contato
          </Link>
          <Link href="/signin">
            <button
              className="text-white font-medium px-5 py-2 rounded-full transition bg-blue-600 hover:bg-blue-700"
            >
              Entrar
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
