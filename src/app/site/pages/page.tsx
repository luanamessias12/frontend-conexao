import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold">Quem somos</h1>
        <p className="text-lg text-gray-700">
          Somos uma plataforma comprometida em conectar pessoas, escolas e profissionais de forma inteligente e humanizada.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-blue-900">Missão</h2>
            <p className="mt-2 text-sm text-gray-800">
              Facilitar o acesso à informação e à educação, promovendo inclusão e autonomia para todos.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-blue-900">Visão</h2>
            <p className="mt-2 text-sm text-gray-800">
              Ser referência nacional em tecnologia acessível e transformadora na área educacional e social.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-blue-900">Valores</h2>
            <p className="mt-2 text-sm text-gray-800">
              Inclusão, ética, empatia, inovação e compromisso com o impacto social positivo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
