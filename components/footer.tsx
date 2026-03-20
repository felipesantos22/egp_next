import Image from "next/image";

export default function Footer() {
  const numero = "5511997666641";
  const mensagem = "Olá vim pelo site!";

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <footer className="bg-black text-white h-32 flex flex-col items-center justify-center gap-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src="/whats.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="hover:scale-110 transition"
        />
      </a>

      <p className="text-center">&copy; 2026 Egito Viagens. Todos os direitos reservados.</p>
    </footer>
  );
}
