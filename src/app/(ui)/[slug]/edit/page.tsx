"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { db } from "@/firebase"; // Firebase configurado
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const { user: currentUser } = useAuth(true); // rota protegida

  // Estados controlados do formulário
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [link, setLink] = useState("");

  const handleSave = async () => {
    if (!currentUser) return;

    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        name,
        bio,
        link
      });
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao salvar alterações.");
    }
  };

  return (
    <div>
      <GeneralHeader backHref="/home">
        <div className="font-bold text-lg">Editar Perfil</div>
      </GeneralHeader>

      {/* Capa e avatar */}
      <section className="border-b-2 border-gray-900">
        <div className="flex justify-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center">
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>

        <div className="-mt-12 px-6">
          <img
            src="/avatar-placeholder.png"
            alt="avatar"
            className="size-24 rounded-full"
          />

          <div className="-mt-24 size-24 flex justify-center items-center">
            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="p-6 flex flex-col gap-4">
        <label>
          <p className="text-lg text-gray-500 mb-2">Nome</p>
          <Input
            placeholder="Digite seu nome"
            value={name}
            onChange={(value) => setName(value)}
          />
        </label>

        <label>
          <p className="text-lg text-gray-500 mb-2">Bio</p>
          <Textarea
            placeholder="Descreva você mesmo"
            rows={4}
            value={bio}
            onChange={(value) => setBio(value)}
          />
        </label>

        <label>
          <p className="text-lg text-gray-500 mb-2">Link</p>
          <Input
            placeholder="Digite um link"
            value={link}
            onChange={(value) => setLink(value)}
          />
        </label>

        <Button label="Salvar alterações" size={1} onClick={handleSave} />
      </section>
    </div>
  );
}
