export default function ImportantInfo() {
  return (
    <div>
      <section className=" bg-gray-50 mx-10 p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-amber-600">
          Informações Importantes
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>
            A disponibilidade e valores estão sujeitos a alteração sem aviso
            prévio, a reserva só é confirmada após o pagamento do valor inicial.
            Os horário de check-in e check -out deverão ser respeitados,
            portanto, voos que chegam na madrugada ou saem tarde da noite,
            precisarão de noites extras para o check-in imediato. A não
            contratação da diária extra, ocasionará no aguardo do saguão do
            hotel até o horário do check-in. O check-out do Cruzeiro é às 08
            horas da manhã.
          </li>

          <li>
            Em caso de acomodação tripla, a terceira cama poderá não ser de
            mesmo tamanho e conforto e, em alguns casos, poderá ser acomodado em
            camas de montar ou sofá cama. Em regra geral, o check-in é às 14
            horas, check-out às 12 horas.
          </li>

          <li>
            A viagem é realizada em grupo, todos devem chegar e partir no mesmo
            voo indicado por nós, caso não seja possível, será cobrado transfer
            privativo para o passageiro que chegar em outro voo. Em caso de
            remarcação de datas, voluntária ou involuntária, serão cobrados
            taxas de remarcação que serão descontadas diretamente no valor de
            entrada. Em caso de remarcação voluntária ou involuntária dos voos
            domésticos, será cobrada a multa imposta pela cia aérea.
          </li>

          <li>
            O viajante que testar POSITIVO para COVID-19 será responsável por
            todos os custos da quarentena, bem como, pela remarcação da passagem
            aérea. Serão submetidos a quarentena no país, seguindo as regras
            determinadas pelo governo.
          </li>

          <li>
            Quartos com vista para as Pirâmides, suítes, suítes Presidenciais,
            consultar taxa extra por diária. Reservas mediante disponibilidade
            do Hotel.
          </li>

          <li>A ordem dos passeios poderá ser alterada sem aviso prévio.</li>

          <li>Os valores poderão sofre alterações sem aviso prévio.</li>

          <li>
            Os hotéis serão reservados conforme disponibilidade dentro da
            categoria de escolha.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-amber-600">
          Taxas para crianças
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>De 0 a 1 ano: passeio gratuito.</li>

          <li>De 2 a 4,99 anos: 25% do valor total.</li>

          <li>De 5 a 10,99 anos: 50% do valor total em quarto duplo.</li>

          <li>Maiores de 11 anos: valor integral.</li>

          <li>
            Dependendo da idade da criança, poderá dormir na mesma cama que os
            pais, conforme política do hotel.
          </li>

          <li>
            Aéreo internacional e/ou nacional pode ter taxa adicional para
            crianças.
          </li>
        </ol>
      </section>
      <div className="flex flex-col items-center mt-10">
        <h2 className="mt-10 ml-10 text-center">Condições de Pagamento:</h2>
        <p className="ml-10 text-center">Consulte formas de pagamento e parcelamento.</p>
        <button className="ml-10 my-5 bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors">
          Consulte
        </button>
      </div>
    </div>
  );
}
