"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo Egito Viagens"
          width={70}
          height={70}
        />

        {/* Botão mobile */}
        <button
          className="md:hidden text-2xl transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-5 md:opacity-100 md:visible md:translate-y-0"
            }
            bg-white md:bg-transparent shadow-md md:shadow-none
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-6 md:p-0 text-lg font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Quem Somos", href: "/pacotes" },
              { name: "Seguro Viagem", href: "/seguro" },
              { name: "Documentos", href: "/docs" },
              { name: "Perguntas", href: "/perguntas" },
              { name: "Contato", href: "/contato" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 transition-colors duration-200 ${
                    scrolled
                      ? "text-gray-800 hover:text-amber-500"
                      : "text-gray-800 md:text-white hover:text-amber-400"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
