import React from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const FirebaseTeste = () => {
  const criarUsuario = async () => {
    const slug = "luana-dev";
    const userData = {
      email: "luana@email.com",
      name: "Luana Dev",
      password: "senha123",
      avatar: "default.jpg",
      cover: "default.jpg",
      bio: "Desenvolvedora de projetos incríveis",
      link: "https://meuportfolio.com"
    };

    try {
      await setDoc(doc(db, "users", slug), userData);
      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário: " + error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Teste Firebase</h1>
      <button onClick={criarUsuario} style={{ padding: 10, backgroundColor: '#007bff', color: '#fff' }}>
        Criar Usuário de Teste
      </button>
    </div>
  );
};

export default FirebaseTeste;
