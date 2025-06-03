import Header from "../(site)/components/Header";
import Footer from "../(site)/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center" style={{ color: 'rgb(5, 11, 48)' }}>
          Quem Somos
        </h1>

        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          O <strong>Conexão para Todos – Autismo</strong> é um projeto dedicado a promover inclusão, respeito
          e oportunidades para pessoas com Transtorno do Espectro Autista (TEA) e suas famílias.
          Acreditamos que a conexão verdadeira vai além da tecnologia — ela nasce do acolhimento, da empatia
          e do acesso à informação de qualidade.
        </p>

        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          Unimos profissionais, voluntários, familiares e parceiros em uma rede colaborativa que busca criar
          espaços mais acessíveis, informados e preparados para valorizar a neurodiversidade.
          Nosso compromisso é construir pontes entre pessoas, saberes e possibilidades, promovendo o
          desenvolvimento e a qualidade de vida de quem vive o autismo.
        </p>

        <section className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6" style={{ color: 'rgb(5, 11, 48)' }}>
            Objetivos do Projeto
          </h2>

          <ul className="list-disc list-inside text-gray-800 space-y-3 text-left text-base md:text-lg">
            <li>
              Promover a inclusão social e digital de pessoas com autismo, criando ambientes acessíveis, empáticos e acolhedores.
            </li>
            <li>
              Oferecer acesso à informação e orientação para famílias, educadores e cuidadores sobre o TEA, suas particularidades e potencialidades.
            </li>
            <li>
              Capacitar profissionais e voluntários por meio de formações, oficinas e conteúdos especializados em autismo.
            </li>
            <li>
              Estimular o uso da tecnologia como ferramenta de comunicação, aprendizagem e autonomia para pessoas com TEA.
            </li>
            <li>
              Fortalecer redes de apoio entre famílias, escolas, profissionais da saúde e comunidade em geral.
            </li>
            <li>
              Combater o preconceito e a desinformação, promovendo a conscientização e o respeito à neurodiversidade.
            </li>
          </ul>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Missão",
              text: "Facilitar o acesso à informação e à educação, promovendo inclusão e autonomia para todos.",
            },
            {
              title: "Visão",
              text: "Ser referência nacional em tecnologia acessível e transformadora na área educacional e social.",
            },
            {
              title: "Valores",
              text: "Inclusão, ética, empatia, inovação e compromisso com o impacto social positivo.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: 'rgb(5, 11, 48)' }}
              >
                {title}
              </h2>
              <p className="text-gray-800 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
