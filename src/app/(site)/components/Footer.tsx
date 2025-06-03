export default function Footer() {
  return (
    <footer
      className="text-gray-300 text-center py-6 border-t"
      style={{
        backgroundColor: 'rgb(5, 11, 48)',
        borderTopColor: 'rgb(5, 11, 48)',
      }}
    >
      <p>© {new Date().getFullYear()} Conexão Para Todos - Todos os direitos reservados.</p>
      <p>Contato: conexaoparatodos12@gmail.com</p>
    </footer>
  );
}

