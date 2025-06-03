"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-[rgb(5,11,48)]">
          Sobre Nós
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/sobre-nos.jpg"
              alt="Imagem Sobre Nós"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-justify space-y-5">
            <p>
              O <strong>Conexão Para Todos</strong> é uma plataforma criada com o objetivo de conectar pessoas, ideias e propósitos em um espaço acessível e acolhedor.
            </p>
            <p>
              Acreditamos na inclusão digital e na importância de dar voz a todos. Nosso time é formado por profissionais comprometidos com a inovação e o impacto social.
            </p>
            <p>
              Aqui, usuários podem compartilhar experiências, criar conexões e colaborar em uma comunidade vibrante.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
