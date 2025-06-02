export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto text-center space-y-10">
        <h1
          className="text-4xl font-bold"
          style={{ color: 'rgb(5, 11, 48)' }}
        >
          Quem somos
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Somos uma plataforma comprometida em conectar pessoas, escolas e profissionais de forma inteligente e humanizada.
        </p>

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
    </div>
  );
}
