"use client";

import { useState } from "react";

export default function PerguntasPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    try {
      const res = await fetch("http://localhost:8000/questions/", {
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
    <div className="min-h-screen mx-2">
      <h1 className="text-3xl font-light mb-6 mt-30 underline decoration-solid text-center">Perguntas Frequentes</h1>

      <div className="flex gap-2">
        <input
          className="border p-3 rounded w-full"
          placeholder="Digite sua pergunta..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={ask}
          disabled={loading}
          className="bg-blue-500 text-white px-4 rounded disabled:opacity-50"
        >
          {loading ? "Carregando..." : "Perguntar"}
        </button>
      </div>

      {answer && <div className="mt-8 p-4 bg-gray-100 rounded">{answer}</div>}
    </div>
  );
}
