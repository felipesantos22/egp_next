import type { Metadata } from "next";
import { Noto_Sans_Arabic, Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Egito Viagens - Pacotes de Viagem para o Egito",
  description: "Egito Viagens oferece pacotes de viagem exclusivos para explorar os melhores destinos na África.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
