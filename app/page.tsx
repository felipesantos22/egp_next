"use client";

import { useState } from "react";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import { pacotes } from "@/data/packets";

export default function Home() {
  const [paisSelecionado, setPaisSelecionado] = useState("Todos");

  const pacotesFiltrados =
    paisSelecionado === "Todos"
      ? pacotes
      : pacotes.filter((item) => item.title === paisSelecionado);

  // pegar países únicos automaticamente
  const paises = ["Todos", ...new Set(pacotes.map((p) => p.title))];

  return (
    <div>
      <div className="mx-2 mt-20 mb-2">
        <Carousel />
      </div>

      <div className="bg-gray-50 h-40 mx-2 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mt-4">Africa Tours</h1>
        <p>Escolha um determinado destino e vá em frente!</p>
      </div>

      <div className="flex items-center justify-end p-4 bg-gray-50">
        <select
          value={paisSelecionado}
          onChange={(e) => setPaisSelecionado(e.target.value)}
          className="p-1 border rounded-sm"
        >
          {paises.map((pais) => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-2 bg-gray-50">
        {pacotesFiltrados.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            href={`/pacotes/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
