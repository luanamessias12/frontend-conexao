import type { Metadata } from "next";

import "./globals.css";

import Header from "./(site)/components/Header";  // ajuste o caminho se precisar
import Footer from "./(site)/components/Footer";  // ajuste o caminho se precisar

export const metadata: Metadata = {
  title: "Conexão para Todos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
