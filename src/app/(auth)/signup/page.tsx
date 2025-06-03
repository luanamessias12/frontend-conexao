"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Cria o usuário no Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Atualiza o displayName (opcional)
      await updateProfile(user, { displayName: name });

      // Cria o documento do usuário no Firestore com base no slug
      await setDoc(doc(db, "users", slug), {
        uid: user.uid,
        name,
        email,
        slug,
        avatar: "/default-avatar.png",
        cover: "/default-cover.jpg",
        bio: "",
        link: "",
        postCount: 0,
      });

      // Redireciona para a página inicial após o cadastro
      router.push("/home");
    } catch (err: any) {
      console.error(err);
      setError("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Criar conta</h1>

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Slug (ex: maria123)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Cadastrar
      </button>
    </form>
  );
}
