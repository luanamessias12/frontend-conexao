import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";
import { Globe, Handshake, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <section className="flex flex-col justify-center items-center px-6 py-20 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[rgb(5,11,48)]">
            Bem-vindo à Conexão Para Todos
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Plataforma para conectar pessoas, escolas e profissionais de forma inteligente, humanizada e acessível.
          </p>
        </section>

        {/* Destaques com ícones */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <Globe size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[rgb(5,11,48)]">Inclusão Digital</h3>
              <p className="text-gray-600">
                Acreditamos que todos merecem acesso à tecnologia e oportunidades.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <Handshake size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[rgb(5,11,48)]">Parcerias Humanizadas</h3>
              <p className="text-gray-600">
                Conectamos escolas e profissionais que compartilham os mesmos valores.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <Users size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[rgb(5,11,48)]">Comunidade Colaborativa</h3>
              <p className="text-gray-600">
                Incentivamos trocas de experiências para gerar impacto social positivo.
              </p>
            </div>
          </div>
        </section>

        {/* Curiosidade e Exploração */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-[rgb(5,11,48)]">
              Descubra o que a Conexão Para Todos pode fazer por você
            </h2>
            <p className="text-gray-700 text-lg">
              Você é uma escola em busca de profissionais comprometidos? Um especialista que quer ampliar seu impacto? Ou alguém que deseja pertencer a uma comunidade inclusiva?
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Explore. Participe. Conecte-se.
            </p>
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="py-20 bg-[rgb(5,11,48)] text-white text-center px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Junte-se a essa conexão!</h3>
            <p className="text-lg md:text-xl">
              Cadastre-se agora e faça parte de uma rede que transforma realidades.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition">
              Começar agora
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
