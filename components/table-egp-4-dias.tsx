export default function TableEgp4Dias() {
  return (
    <section className=" bg-gray-50 py-10 mx-10 my-10 overflow-x-auto">
      <h2 className="text-center mb-5 text-3xl underline">
        Hotéis Previstos ou similares
      </h2>
      <table className="border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Cidade</th>
            <th className="border px-4 py-2">Turística</th>
            <th className="border px-4 py-2">Prata</th>
            <th className="border px-4 py-2">Ouro</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center">
            <td className="border px-4 py-2">Cairo</td>
            <td className="border px-4 py-2">
              Cleópatra
              <br />
              Pyramids Park
              <br />
              Barceló
              <br />
              Oásis
              <br />
              ou similares
            </td>
            <td className="border px-4 py-2">
              Ramsis
              <br />
              Safir Dokki
              <br />
              Novotel
              <br />
              Radisson Blue
              <br />
              ou similares
            </td>
            <td className="border px-4 py-2">
              Conrad
              <br />
              Fairmont
              <br />
              Steigenburguer
              <br />
              Pyramides
              <br />
              ou similares
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
