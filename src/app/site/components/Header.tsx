import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-blue-900 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <Image src="/conexao-logo.png" alt="Logo" width={40} height={40} />
        <span className="text-xl font-semibold">Conexão Para Todos</span>
      </div>
      <Link href="/signin">
        <button className="bg-blue-800 text-white font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Entrar
        </button>
      </Link>
    </header>
  )
}
