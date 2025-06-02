import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <main className="flex-1 flex flex-col justify-center items-center px-6 py-12 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à Conexão Para Todos</h1>
          <p className="text-lg text-gray-700">
            Plataforma para conectar pessoas, escolas e profissionais de forma inteligente e humanizada.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
