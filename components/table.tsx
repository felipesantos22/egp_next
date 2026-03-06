export default function PackageIncludes() {
  return (
    <section className="pl-10 bg-gray-100 py-10 rounded-lg shadow-md mx-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            O pacote inclui
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Traslados aeroporto / hotel / aeroporto</li>
            <li>03 noites de hospedagem no Cairo com café da manhã</li>
            <li>Todos os traslados em veículos modernos com ar-condicionado</li>
            <li>Guia oficial egípcio que fala português ou espanhol</li>
            <li>Visita às Pirâmides de Gizé, Esfinge e Templo do Vale</li>
            <li>Visita a Mênfis e Sakkara</li>
            <li>Passeio pelo Cairo (Cidadela de Saladino)</li>
            <li>Museu Egípcio, Cairo Antigo e Bairro Copta</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            O pacote não inclui
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Voos internacionais</li>
            <li>Seguro viagem obrigatório</li>
            <li>Visto de entrada no Egito</li>
            <li>Entradas nos locais mencionados</li>
            <li>Bebidas e despesas pessoais</li>
            <li>Gorjetas para motorista e guia</li>
            <li>Extras não mencionados</li>
            <li>PCR caso seja exigido</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
