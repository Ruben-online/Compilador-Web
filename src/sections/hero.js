export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-950 via-slate-950 to-slate-950 text-white px-6 pt-28 pb-16 flex items-center">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-green-800 bg-green-900/30 px-4 py-2 text-sm text-green-200 mb-6">
            Proyecto académico • Compiladores • IA
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Vitally Compiler
          </h1>

          {/* Descripción */}
          <p className="text-green-100/80 text-lg leading-relaxed mb-8 max-w-xl">
            Sistema de compilación que analiza información clínica y genera
            planes personalizados utilizando inteligencia artificial.
          </p>

          {/* Botones (ARREGLADOS) */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#demo"
              className="bg-green-500 hover:bg-green-400 transition-colors px-6 py-3 rounded-xl font-medium text-slate-950 text-center"
            >
              Ver demo
            </a>

            <a
              href="#repo"
              className="border border-green-800 hover:border-green-600 hover:bg-green-900/20 transition-colors px-6 py-3 rounded-xl font-medium text-green-100 text-center"
            >
              Ver repositorio
            </a>

          </div>

        </div>

        {/* Columna derecha */}
        <div className="bg-slate-900/80 backdrop-blur-sm border border-green-900 rounded-3xl p-6 shadow-2xl">

          {/* Header del panel */}
          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-xl font-semibold">
                Dashboard del proyecto
              </h2>

              <p className="text-green-200/70 text-sm">
                Estado general del compilador
              </p>
            </div>

            <div className="flex items-center gap-2 text-green-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Online
            </div>

          </div>

          {/* Panel principal */}
          <div className="bg-slate-950 border border-green-950 rounded-2xl p-5 mb-6">

            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            <div className="space-y-3 text-sm font-mono text-green-100/80">

              <p>{">"} Inicializando análisis léxico...</p>
              <p>{">"} Verificando sintaxis...</p>

              <p className="text-green-400">
                {">"} Análisis semántico completado
              </p>

            </div>

          </div>

          {/* Información */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="bg-slate-950 border border-green-950 rounded-2xl p-4">
              <p className="text-green-200/60 text-sm mb-1">Curso</p>
              <p className="font-medium">Compiladores</p>
            </div>

            <div className="bg-slate-950 border border-green-950 rounded-2xl p-4">
              <p className="text-green-200/60 text-sm mb-1">Docente</p>
              <p className="font-medium">Ing. Jorge Tello</p>
            </div>

            <div className="bg-slate-950 border border-green-950 rounded-2xl p-4 sm:col-span-2">
              <p className="text-green-200/60 text-sm mb-1">Integrantes</p>
              <p className="font-medium leading-relaxed">
                Henry Diaz • Giovanny Alcon • Rubén Espinoza
              </p>
            </div>

            <div className="bg-slate-950 border border-green-950 rounded-2xl p-4 sm:col-span-2">
              <p className="text-green-200/60 text-sm mb-1">Fecha</p>
              <p className="font-medium">5 de mayo del 2026</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}