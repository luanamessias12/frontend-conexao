import Header from "../(site)/components/Header";
import Footer from "../(site)/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <main className="flex-1 px-4 sm:px-6 py-12 max-w-6xl mx-auto">

          {/* Título principal */}
          <h1
            className="text-3xl sm:text-4xl font-bold text-center mb-10"
            style={{ color: 'rgb(5, 11, 48)' }}
          >
            Filmes, Séries, Cordões, ONGs e Pessoas Inspiradoras sobre Autismo
          </h1>

          {/* Seção de filmes e séries */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'rgb(5, 11, 48)' }}>
              Filmes e Séries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Temple Grandin",
                  description: "Baseado na vida de Temple Grandin, uma mulher autista que revolucionou a ciência animal.",
                },
                {
                  title: "Atypical",
                  description: "Série sobre um adolescente no espectro autista buscando independência e amor.",
                },
                {
                  title: "Rain Man",
                  description: "Clássico com Dustin Hoffman como um homem autista com habilidades excepcionais.",
                },
                {
                  title: "O Contador",
                  description: "Thriller com personagem principal autista que trabalha como contador forense.",
                },
                {
                  title: "Extraordinário",
                  description: "Embora não seja especificamente sobre autismo, aborda inclusão e empatia.",
                },
                {
                  title: "Tudo em Família",
                  description: "Filme que inclui personagem autista e aborda a importância do acolhimento familiar.",
                },
              ].map(({ title, description }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-2 text-[rgb(5,11,48)]">{title}</h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cordões de identificação */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[rgb(5,11,48)]">
              Cordões de Identificação
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-yellow-100 rounded-xl p-6 border border-yellow-300 shadow-inner">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cordão de Girassol</h3>
                <p className="text-gray-700 text-sm">
                  O Cordão de Girassol é um símbolo internacional de identificação de pessoas com deficiências ocultas, incluindo o TEA. Ele ajuda no reconhecimento e acolhimento em locais públicos e serviços.
                </p>
              </div>
              <div className="bg-blue-100 rounded-xl p-6 border border-blue-300 shadow-inner">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Símbolo do Quebra-Cabeça</h3>
                <p className="text-gray-700 text-sm">
                  O quebra-cabeça é um símbolo associado à conscientização sobre o autismo. Representa a diversidade e complexidade do espectro autista, além da necessidade de compreensão e inclusão.
                </p>
              </div>
            </div>
          </section>

          {/* ONGs brasileiras */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[rgb(5,11,48)]">ONGs Brasileiras</h2>
            <ul className="list-disc list-inside text-gray-800 text-sm space-y-2">
              <li><strong>Instituto Neurodiversa:</strong> Focado em inclusão escolar e capacitação de profissionais.</li>
              <li><strong>AMA – Associação de Amigos do Autista:</strong> Referência nacional em atendimento especializado.</li>
              <li><strong>Instituto Priorit:</strong> Trabalha com políticas públicas e formação sobre autismo.</li>
              <li><strong>Associação União de Mães de Autistas (UMA):</strong> Apoio e acolhimento para famílias e crianças com TEA.</li>
            </ul>
          </section>

          {/* Pessoas Inspiradoras */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[rgb(5,11,48)]">Pessoas Inspiradoras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Temple Grandin",
                  description: "Cientista autista que revolucionou a pecuária e defende os direitos das pessoas autistas.",
                },
                {
                  name: "Greta Thunberg",
                  description: "Ativista ambiental com síndrome de Asperger que inspira milhões ao redor do mundo.",
                },
                {
                  name: "Dan Aykroyd",
                  description: "Ator e comediante conhecido, diagnosticado com autismo, defensor da causa.",
                },
                {
                  name: "Anthony Ianni",
                  description: "Ex-jogador de basquete universitário, primeiro com autismo a jogar na NCAA, hoje palestrante motivacional.",
                },
                {
                  name: "Daryl Hannah",
                  description: "Atriz diagnosticada com autismo, conhecida por seu ativismo e carreira em Hollywood.",
                },
                {
                  name: "Donna Williams",
                  description: "Autora e artista australiana que descreveu sua experiência com autismo em diversos livros.",
                },
              ].map(({ name, description }) => (
                <div key={name} className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-2 text-[rgb(5,11,48)]">{name}</h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}
