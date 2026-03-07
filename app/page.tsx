"use client";

import { useState } from "react";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import { pacotes } from "@/data/packets";
import Image from "next/image";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const [paisSelecionado, setPaisSelecionado] = useState("Todos");

  const pacotesFiltrados =
    paisSelecionado === "Todos"
      ? pacotes
      : pacotes.filter((item) => item.country === paisSelecionado);

  // pegar países únicos automaticamente
  const paises = ["Todos", ...new Set(pacotes.map((p) => p.country))];

  return (
    <div>
      <div className="mx-2 mt-25 mb-2">
        <Carousel />
      </div>

      <div className="bg-gray-50 h-40 mx-2 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold my-4 underline uppercase">Egito Viagens</h1>
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

      <h1 className="text-center mt-15 mb-4 text-4xl font-bold underline uppercase">
        Experiências de nossos viajantes
      </h1>
      <div className="flex flex-wrap justify-around mt-10 mb-20 mx-2 p-4 bg-gray-50">
        <div className="mb-8 -rotate-15 animate-none">
          <Image
            src="/images/magazine01.png"
            alt="Experiências de nossos viajantes"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col">
          <p className="mx-2 text-lg max-w-md text-justify">
            Viajar para o Egito é uma experiência ÚNICA, diferente de qualquer
            outra viagem que se possa fazer. Nossos clientes fazem questão de
            deixar isso claro através de seus depoimentos. É difícil mensurar a
            satisfação e a felicidade de cada um, visto que, frequentemente,
            recebemos ligações de agradecimento e relatos de viajantes que
            retornam do Egito com a alma leve e uma nova visão sobre o mundo e
            sobre suas próprias vidas. O Egito é uma viagem que transcende!
            Acompanhem, clicando abaixo.
          </p>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md mt-4">
            Ver mais
          </button>
        </div>
      </div>
      <div className="bg-[url('/images/dubai.jpg')] bg-cover bg-center bg-fixed h-150 m-2 flex flex-col items-center justify-center text-center p-4 rounded-2xl shadow-lg">
        <Testimonials />
      </div>
    </div>
  );
}
