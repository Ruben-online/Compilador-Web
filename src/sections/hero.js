export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-green-900 text-white px-6 pt-20">
      <div className="max-w-4xl text-center">

        {/* Título */}
        <h1 className="text-5xl font-bold mb-6">
          Vitally Compiler
        </h1>

        {/* Descripción */}
        <p className="text-green-100 text-lg mb-8">
          Sistema de compilación que analiza información clínica y genera planes
          personalizados utilizando inteligencia artificial.
        </p>

        {/* Info del proyecto */}
        <div className="bg-green-800/50 rounded-lg p-6 text-left text-sm space-y-2">

          <p>
            <span className="font-semibold">Integrantes:</span>{" "}
            Henry Diaz - Giovanny Alcon - Rubén Espinoza
          </p>

          <p>
            <span className="font-semibold">Curso:</span>{" "}
            Compiladores
          </p>

          <p>
            <span className="font-semibold">Docente:</span>{" "}
            Ing. Jorge Tello
          </p>

          <p>
            <span className="font-semibold">Fecha:</span>{" "}
            5 de mayo del 2026
          </p>

        </div>

      </div>
    </section>
  );
}