import CarouselPages from "@/components/carrousel-pages";
import ImportantInfo from "@/components/info";
import PackageIncludes from "@/components/table";
import TableEgp4Dias from "@/components/table-egp-4-dias";
import { egito_4_dias } from "@/data/tm-egito-4-dias";

export default function EGPBasico() {
  return (
    <div className="min-h-screen bg-gray-50 mt-25 mb-10 mx-2 pt-10 rounded-2xl">
      <h1 className="text-5xl font-medium text-center mb-10">Egito Básico</h1>
      <CarouselPages />
      <h2 className="text-2xl font-semibold pl-10 mt-10 text-amber-500">
        Visitaremos:
      </h2>
      <p className="text-gray-700 leading-relaxed pl-10">
        <span className="font-semibold">Cidade do Cairo.</span> Pacote terrestre
        Cairo (Pirâmides, Sakkara, Museu Egípcio, Mesquita de Alabastro). Inclui
        hospedagem no Cairo por <span className="font-semibold">3 noites</span>,
        passeios no Cairo com <span className="font-semibold">almoço</span> e{" "}
        <span className="font-semibold">guia em português</span>.
      </p>

      <section className="py-10">
        <h2 className="text-3xl font-medium mb-8 text-center underline">
          Roteiro da Viagem
        </h2>

        <div className="space-y-10 rounded-lg px-10 py-10">
          {egito_4_dias.map(
            (dia: { titulo: string; texto: string }, index: number) => (
              <div
                key={index}
                className="relative bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {dia.titulo}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  {dia.texto}
                </p>
              </div>
            ),
          )}
        </div>
      </section>
      <PackageIncludes />
      <p className="text-gray-600 text-center mt-10">
        A ordem dos passeios poderá sofrer alterações sem aviso prévio e sem
        prejuízo. Os valores poderão sofrer alterações sem aviso prévio.
      </p>
      <TableEgp4Dias />
      <ImportantInfo />
    </div>
  );
}
