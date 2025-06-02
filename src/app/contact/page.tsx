import Header from "../(site)/components/Header";
import Footer from "../(site)/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-white"
        style={{ backgroundColor: 'rgb(5, 11, 48)' }}
      >
        <div className="w-full max-w-xl bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: 'rgb(5, 11, 48)' }}>
            Fale conosco
          </h1>

          <p className="mb-8 text-center" style={{ color: 'rgb(5, 11, 48)' }}>
            Tem alguma dúvida, sugestão ou proposta? Envie uma mensagem para nós!
          </p>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-white">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">Mensagem</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full font-semibold py-2 rounded-full transition text-white"
              style={{
                backgroundColor: 'rgb(5, 11, 48)',
                border: '1px solid white',
              }}
            >
              Enviar mensagem
            </button>
          </form>

          <p className="mt-8 text-sm text-center" style={{ color: 'rgb(5, 11, 48)' }}>
            Ou envie um e-mail direto para:{" "}
            <a href="mailto:contato@conexao.com.br" className="underline font-semibold">
              contato@conexao.com.br
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
