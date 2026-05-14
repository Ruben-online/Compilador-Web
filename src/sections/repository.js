export default function Repository() {
  return (
    <section
      id="repo"
      className="px-6 py-24 bg-gradient-to-b from-green-950 to-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
            Sección 05
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Repositorio del Proyecto
          </h2>

          <div className="w-24 h-1 bg-green-500 rounded-full mx-auto mb-8"></div>

          <p className="text-green-100/80 text-lg leading-relaxed max-w-2xl mx-auto">
            El código fuente completo del compilador está disponible en GitHub.
            Puedes revisarlo para entender su implementación, estructura y funcionamiento interno.
          </p>

        </div>

        {/* CARD */}
        <div className="bg-slate-900/80 backdrop-blur-sm border border-green-950 rounded-3xl p-10 text-center hover:border-green-800 transition-colors">

          {/* Icono estilo terminal */}
          <div className="flex justify-center mb-6">

            <div className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-green-950 rounded-full">

              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>

              <span className="text-green-300 text-sm ml-2">
                GitHub Repository
              </span>

            </div>

          </div>

          {/* Texto corto */}
          <p className="text-green-100/70 mb-8">
            Explora el código fuente del compilador, incluyendo análisis léxico,
            sintáctico, semántico y generación de resultados con IA.
          </p>

          {/* BOTÓN */}
          <a
            href="https://github.com/Ruben-online/lexical-analyzer.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-green-900/40 transition-all duration-300"
          >
            Ver repositorio en GitHub
          </a>

        </div>

      </div>
    </section>
  );
}