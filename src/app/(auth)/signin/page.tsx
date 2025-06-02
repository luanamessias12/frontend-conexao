"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase"; // ajuste se necessário

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const auth = getAuth(app);
  const router = useRouter(); // redirecionador

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMsg("Login realizado com sucesso!");
      router.push("/home"); // redireciona para a rota home
    } catch (error: any) {
      setErrorMsg(error.message || "Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <Logo size={56} />
      <h1 className="mt-10 text-2xl">Entre na sua conta</h1>
      <form onSubmit={handleSubmit} className="mt-10 mb-14 flex flex-col gap-6">
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
          className="input"
        />
        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>

      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      {successMsg && <p className="text-green-600">{successMsg}</p>}

      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <div className="text-gray-500">Ainda não tem uma conta?</div>
        <Link href="/signup" className="hover:underline">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}
