"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-20 flex justify-evenly items-center font-bold fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-50 text-black shadow-md" : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-0 flex items-center justify-between">
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
          className={`${menuOpen ? "block" : "hidden"} absolute top-full left-0 w-full md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-4 text-lg">
            <li>
              <a
                href="/"
                className="block py-2 text-gray-50 hover:text-amber-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/pacotes"
                className="block py-2 text-gray-50 hover:text-amber-500"
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="/seguro"
                className="block py-2 text-gray-50 hover:text-amber-500"
              >
                Seguro Viagem
              </a>
            </li>
            <li>
              <a
                href="/docs"
                className="block py-2 text-gray-50 hover:text-amber-500"
              >
                Documentos
              </a>
            </li>
            <li>
              <a
                href="/perguntas"
                className="block py-2 text-gray-50 hover:text-amber-500"
              >
                Perguntas
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className="block py-2 text-gray-50 hover:text-amber-500"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
