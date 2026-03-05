"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md py-2 fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Image
          src="/images/logo.png"
          alt="Logo Egito Viagens"
          width={80}
          height={80}
        />

        {/* Botão mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`${menuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-gray-50 md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li>
              <a
                href="/"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/pacotes"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="/seguro"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Seguro Viagem
              </a>
            </li>
            <li>
              <a
                href="/docs"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Documentos
              </a>
            </li>
            <li>
              <a
                href="/perguntas"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Perguntas
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="/agente"
                className="block py-2 text-gray-600 hover:text-amber-500"
              >
                Agente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
