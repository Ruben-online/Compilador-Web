export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">

        <h1 className="font-bold text-lg text-green-800">
          Vitally - Compiler
        </h1>

        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#introduccion" className="hover:text-green-700 transition">
              Introducción
            </a>
          </li>
          <li>
            <a href="#lenguaje" className="hover:text-green-700 transition">
              Lenguaje
            </a>
          </li>
          <li>
            <a href="#fases" className="hover:text-green-700 transition">
              Fases
            </a>
          </li>
          <li>
            <a href="#demo" className="hover:text-green-700 transition">
              Demo
            </a>
          </li>
          <li>
            <a href="#repo" className="hover:text-green-700 transition">
              Repositorio
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}