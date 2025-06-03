import Header from "../(site)/components/Header";
import Footer from "../(site)/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <main className="flex-1 px-4 sm:px-6 py-12 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10" style={{ color: 'rgb(5, 11, 48)' }}>
            Filmes, Séries e Pessoas Inspiradoras sobre Autismo
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: 'rgb(5, 11, 48)' }}>
              Filmes e Séries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Temple Grandin (2010)",
                  description: "Filme baseado na vida de Temple Grandin, uma mulher autista que revolucionou o campo da ciência animal.",
                },
                {
                  title: "Atypical (2017–2021)",
                  description: "Série que retrata a vida de um jovem no espectro autista e suas experiências de crescimento e independência.",
                },
                {
                  title: "Rain Man (1988)",
                  description: "Filme clássico que aborda a relação entre dois irmãos, um deles com autismo e habilidades excepcionais.",
                },
              ].map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'rgb(5, 11, 48)' }}>
                    {title}
                  </h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl border border-blue-200 shadow-inner bg-blue-50 text-[rgb(5,11,48)]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Organizações que lutam pela causa do autismo</h3>
              <p className="text-gray-800 text-base leading-relaxed">
                Diversas ONGs ao redor do mundo trabalham para promover a inclusão, a conscientização e o apoio às pessoas no espectro autista. Entre elas:
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-700 text-sm sm:text-base">
                <li><strong>Autism Speaks:</strong> Organização internacional que oferece recursos, pesquisa e defesa dos direitos das pessoas autistas.</li>
                <li><strong>ASPASIA:</strong> ONG brasileira que promove inclusão social e educacional para autistas e suas famílias.</li>
                <li><strong>National Autistic Society:</strong> Principal organização do Reino Unido focada em educação e suporte para autistas.</li>
                <li><strong>Instituto Luz do Saber:</strong> Organização brasileira que trabalha com diagnóstico e tratamento precoce do autismo.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: 'rgb(5, 11, 48)' }}>
              Pessoas Inspiradoras
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Greta Thunberg",
                  description: "Ativista ambiental com Síndrome de Asperger, que trouxe maior visibilidade para o autismo no mundo.",
                },
                {
                  name: "Dan Aykroyd",
                  description: "Ator e roteirista conhecido, diagnosticado com Síndrome de Asperger, defensor da conscientização sobre autismo.",
                },
                {
                  name: "Temple Grandin",
                  description: "Cientista e professora autista que revolucionou a engenharia de manejo animal e a percepção do autismo.",
                },
              ].map(({ name, description }) => (
                <div
                  key={name}
                  className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'rgb(5, 11, 48)' }}>
                    {name}
                  </h3>
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
