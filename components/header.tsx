export default function Header() {
  return (
    <header className="bg-gray-50 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Egito Viagens</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="/pacotes" className="text-gray-600 hover:text-gray-800">
                Pacotes
              </a>
            </li>
            <li>
              <a href="/contato" className="text-gray-600 hover:text-gray-800">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
