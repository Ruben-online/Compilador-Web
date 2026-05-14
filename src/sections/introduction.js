export default function Introduction() {
  return (
    <section
      id="introduccion"
      className="px-6 py-24 bg-gradient-to-b from-slate-950 to-green-950/80 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">

          <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
            Sección 01
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Introducción
          </h2>

          <div className="w-24 h-1 bg-green-500 rounded-full"></div>

        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-green-950 rounded-3xl p-8 hover:border-green-800 transition-colors">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-3 h-3 rounded-full bg-green-400"></div>

              <h3 className="text-xl font-semibold text-green-300">
                Objetivo del proyecto
              </h3>

            </div>

            <p className="text-green-100/80 leading-relaxed text-lg">
              Este proyecto consiste en el desarrollo de un compilador diseñado
              para procesar un lenguaje enfocado en la creación de planes
              clínicos personalizados.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-green-950 rounded-3xl p-8 hover:border-green-800 transition-colors">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-3 h-3 rounded-full bg-green-400"></div>

              <h3 className="text-xl font-semibold text-green-300">
                Funcionamiento general
              </h3>

            </div>

            <p className="text-green-100/80 leading-relaxed text-lg">
              A través de distintas fases, el compilador analiza, valida y
              transforma la información del paciente para generar
              recomendaciones de rutinas y dietas utilizando inteligencia
              artificial.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
} 