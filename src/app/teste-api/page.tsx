'use client';

import { useEffect, useState } from 'react';
import api from '@/services/api';

export default function TesteAPI() {
  const [resposta, setResposta] = useState('');

  useEffect(() => {
    async function testarAPI() {
      try {
        const res = await api.get('/api/ping'); // ou só '/ping' se o seu back usa '/ping'
        setResposta(res.data);
      } catch (erro) {
        console.error('Erro ao chamar a API:', erro);
        setResposta('Erro ao acessar o backend');
      }
    }

    testarAPI();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Teste de Conexão com o Backend</h1>
      <p>{resposta}</p>
    </div>
  );
}
