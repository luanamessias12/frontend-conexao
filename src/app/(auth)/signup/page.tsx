"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "@/firebase";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const slug = name.toLowerCase().replace(/\s+/g, "-");

      await setDoc(doc(db, "users", user.uid), {
        name,
        email: user.email,
        slug,
        bio: "",
        link: "",
      });

      router.push("/home");
    } catch (err: any) {
      console.error("Erro ao cadastrar:", err);
      setError(err.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md space-y-6 p-8 border border-gray-800 rounded-2xl">
        <div className="max-w-lg mx-auto mt-12 px-6">
          <Logo size={56} />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center">Crie sua conta</h1>

      <div className="space-y-4">
        <Input
          placeholder="Nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          placeholder="Senha"
          password
          value={password}
          onChange={(value) => setPassword(value)}
          onEnter={handleSignup}
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <Button
        label={loading ? "Criando conta..." : "Criar conta"}
        onClick={handleSignup}
        disabled={loading}
        className="w-full"
        size={1}
      />
    </div>
  );
}
