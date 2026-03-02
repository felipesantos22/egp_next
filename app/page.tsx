import Card from "@/components/card";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <div className="mx-2 mt-20 mb-2">
        <Carousel />
      </div>
      <div className="bg-gray-50 h-40 mx-2 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mt-4">EGITO VIAGENS</h1>
        <p>
          Escolha um determinado destino e vá em frente!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 p-2 bg-gray-50">
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/nilo.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
        <Card
          title="Pirâmides de Gizé"
          description="Pacote completo 7 dias"
          image="/images/p-giza.jpg"
          href="/pacotes/giza"
        />
      </div>
    </div>
  );
}
