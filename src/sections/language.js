export default function Language() {
  return (
    <section
      id="lenguaje"
      className="px-6 py-24 bg-gradient-to-b from-slate-950 to-green-950 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">

          <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
            Sección 02
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Lenguaje
          </h2>

          <div className="w-24 h-1 bg-green-500 rounded-full"></div>

        </div>

        {/* Intro */}
        <div className="bg-slate-900 border border-green-950 rounded-3xl p-8 mb-10">

          <p className="text-green-100/80 text-lg leading-relaxed">
            El lenguaje diseñado permite describir pacientes, rutinas y dietas
            mediante instrucciones estructuradas.
          </p>

        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Código */}
          <div className="bg-slate-900 border border-green-950 rounded-3xl overflow-hidden">

            {/* Header tipo editor */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-green-950 bg-slate-950">

              <div className="flex items-center gap-2">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

              </div>

              <span className="text-sm text-green-200/70">
                .nut
              </span>

            </div>

            {/* Código */}
            <pre className="p-6 overflow-x-auto text-sm md:text-base text-green-400 leading-relaxed font-mono">
{`INICIO
PACIENTE: Sofia;
EDAD: 25;

RUTINA: basica;
ACCION: caminar * 10;
FIN`}
            </pre>

          </div>

          {/* Elementos */}
          <div className="bg-slate-900 border border-green-950 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-3 h-3 rounded-full bg-green-400"></div>

              <h3 className="text-2xl font-semibold text-green-300">
                Elementos del lenguaje
              </h3>

            </div>

            <div className="space-y-5 text-green-100/80">

              <div className="bg-slate-950 border border-green-950 rounded-2xl p-5">
                <p className="font-semibold text-green-300 mb-2">
                  Palabras reservadas
                </p>

                <p>
                  INICIO, FIN, PACIENTE, RUTINA
                </p>
              </div>

              <div className="bg-slate-950 border border-green-950 rounded-2xl p-5">
                <p className="font-semibold text-green-300 mb-2">
                  Identificadores
                </p>

                <p>
                  Nombres de pacientes o rutinas
                </p>
              </div>

              <div className="bg-slate-950 border border-green-950 rounded-2xl p-5">
                <p className="font-semibold text-green-300 mb-2">
                  Operadores
                </p>

                <p>
                  *, +, &gt;, &lt;, ==
                </p>
              </div>

              <div className="bg-slate-950 border border-green-950 rounded-2xl p-5">
                <p className="font-semibold text-green-300 mb-2">
                  Símbolos
                </p>

                <p>
                  ;, :, &lt;, &gt;
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}