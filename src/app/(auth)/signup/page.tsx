"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { db } from "@/firebase"; // Importe o Firestore
import { doc, setDoc } from "firebase/firestore"; // Importe funções do Firestore
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Para redirecionar

export default function Page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const generateSlug = (name: string, uid: string) => {
    return (
      name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") +
      "-" +
      uid.slice(0, 6)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Atualiza o nome no Auth
      await updateProfile(user, { displayName: name });

      // Cria o perfil no Firestore
      const slug = generateSlug(name, user.uid);

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        slug,
        createdAt: new Date(),
        bio: "",
        avatarUrl: "", // Pode adicionar futuramente
      });

      setSuccessMsg("Cadastro realizado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");

      // Redireciona para home
      router.push("/home");
    } catch (error: any) {
      const errorMessage = error.message || "Erro ao cadastrar. Tente novamente.";
      setErrorMsg(errorMessage);
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
        <button
          type="submit"
          className="btn-primary bg-blue-800 text-white font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>

      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      {successMsg && <p className="text-green-600">{successMsg}</p>}

      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <div className="text-gray-500">Já tem uma conta?</div>
        <Link href="/auth/signin" className="hover:underline">
          Entrar na conexão
        </Link>
      </div>
    </div>
  );
}
