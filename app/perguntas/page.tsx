"use client";

import { useState } from "react";

export default function PerguntasPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    try {
      const res = await fetch("https://ragone-production.up.railway.app/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      console.log("STATUS:", res.status);

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      try {
        const data = JSON.parse(text);
        setAnswer(data.answer);
      } catch {
        setAnswer("Resposta não é JSON válida");
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setAnswer("Erro ao conectar com backend");
    }
  };

  return (
    <div className="min-h-screen bg-[url(/images/img08.jpg)] bg-center bg-cover bg-no-repeat pt-30">

      <h1 className="text-3xl font-light underline decoration-solid text-center mb-10">
        Perguntas Frequentes
      </h1>

      <div className="flex gap-2 p-2">
        <input
          className="border p-3 rounded w-full"
          placeholder="Digite sua pergunta..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={ask}
          disabled={loading}
          className="bg-black text-white px-4 rounded disabled:opacity-50"
        >
          {loading ? "Carregando..." : "Perguntar"}
        </button>
      </div>

      {answer && <div className="mt-8 p-4 bg-gray-300 mx-2 rounded">{answer}</div>}
    </div>
  );
}
