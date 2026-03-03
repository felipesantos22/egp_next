import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Africa Tours",
  description: "Explore os melhores destinos de viagem na África com a Africa Tours. Oferecemos pacotes exclusivos para safáris, praias paradisíacas e experiências culturais únicas. Descubra a beleza e a diversidade do continente africano conosco!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
