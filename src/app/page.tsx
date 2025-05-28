import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050B30] text-white">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 shadow-md">
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

      {/* Conteúdo principal */}
      <main className="flex-1 px-6 py-12">
        <section className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold text-white">Quem somos</h1>
          <p className="text-lg text-gray-300">
            Somos uma plataforma comprometida em conectar pessoas, escolas e profissionais de forma inteligente e humanizada.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Missão */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[rgb(5,11,48)]">Missão</h2>
              <p className="text-[rgb(5,11,48)] mt-2 text-sm">
                Facilitar o acesso à informação e à educação, promovendo inclusão e autonomia para todos.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[rgb(5,11,48)]">Visão</h2>
              <p className="text-[rgb(5,11,48)] mt-2 text-sm">
                Ser referência nacional em tecnologia acessível e transformadora na área educacional e social.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[rgb(5,11,48)]">Valores</h2>
              <p className="text-[rgb(5,11,48)] mt-2 text-sm">
                Inclusão, ética, empatia, inovação e compromisso com o impacto social positivo.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050B30] text-gray-400 text-center py-6 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Conexão Para Todos - Todos os direitos reservados.</p>
        <p>Contato: contato@conexao.com.br</p>
      </footer>
    </div>
  )
}
