"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import api from "@/services/api";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await api.post("/signup", { name, email, password });
      setSuccessMsg("Cadastro realizado com sucesso!");
      console.log("Resposta do backend:", response.data);
      // aqui pode limpar campos ou redirecionar
    } catch (error: any) {
      setErrorMsg(
        error.response?.data?.mensagem || "Erro ao cadastrar. Tente novamente."
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <Logo size={56} />
      <h1 className="mt-10 text-2xl">Crie a sua conta</h1>
      <form onSubmit={handleSubmit} className="mt-10 mb-14 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          className="input"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={4}
          className="input"
        />
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </form>

      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      {successMsg && <p className="text-green-600">{successMsg}</p>}

      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <div className="text-gray-500">Já tem uma conta?</div>
        <Link href="/signin" className="hover:underline">
          Entrar na conexão
        </Link>
      </div>
    </div>
  );
}
