export default function Phases() {

  const phases = [
    {
      title: "Fase 1: Analizador Léxico",
      description:
        "El analizador léxico se encarga de leer el código fuente carácter por carácter y convertirlo en tokens. Identifica palabras reservadas, identificadores, operadores, números y símbolos.",
      code: `INICIO
PACIENTE: Sofia;
EDAD: 25;
FIN`,
      result: `Tokens:
INICIO → palabra reservada
PACIENTE → palabra reservada
Sofia → identificador
25 → número`,
      color: "green",
    },

    {
      title: "Fase 2: Analizador Sintáctico",
      description:
        "El analizador sintáctico verifica que los tokens sigan la estructura correcta del lenguaje. Se basa en reglas gramaticales (parser LL(1)) y detecta errores en la construcción del programa.",
      code: `SI EDAD > 20 ENTONCES
IMPRIMIR rutina;
FIN`,
      result: `Gramática básica:
PROGRAMA → INICIO BLOQUES FIN
SENTENCIA → SI CONDICION ENTONCES BLOQUE FIN`,
      color: "emerald",
    },

    {
      title: "Fase 3: Analizador Semántico",
      description:
        "Esta fase verifica que el programa tenga sentido lógico. Se valida que los datos sean correctos, que no existan duplicados y que las referencias sean válidas.",
      code: `PACIENTE: Sofia;
EDAD: 25;
PESO: 60.5;`,
      result: `SEM-01: PACIENTE debe declararse primero
SEM-02: No se permite duplicar paciente
SEM-04: EDAD debe estar entre 1 y 120`,
      color: "lime",
    },

    {
      title: "Fase 4: Tabla de Símbolos",
      description:
        "En esta fase se almacena toda la información relevante del programa, como el paciente, sus propiedades y los bloques definidos.",
      code: `Paciente:
- nombre: Sofia
- edad: 25
- peso: 60.5`,
      result: `Rutina:
- nombre: basica
- acciones: caminar`,
      color: "green",
    },

    {
      title: "Fase 5: Generación de Resultado",
      description:
        "El compilador genera un prompt estructurado que es enviado a un modelo de inteligencia artificial para producir un plan clínico personalizado.",
      code: `{
  "rutina": "caminar 10 repeticiones",
  "dieta": "plan balanceado"
}`,
      result: `Estado:
✓ Prompt generado
✓ IA procesada
✓ JSON válido`,
      color: "emerald",
    },
  ];

  return (
    <section
      id="fases"
      className="px-6 py-24 bg-gradient-to-b from-green-950 to-slate-950 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">

          <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
            Sección 03
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Fases del Compilador
          </h2>

          <div className="w-24 h-1 bg-green-500 rounded-full"></div>

        </div>

        {/* Timeline */}
        <div className="space-y-10">

          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-sm border border-green-950 rounded-3xl overflow-hidden hover:border-green-800 transition-colors"
            >

              {/* Header */}
              <div className="px-8 py-6 border-b border-green-950 bg-slate-950/60">

                <div className="flex items-center gap-4 flex-wrap">

                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400 font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold text-green-300">
                    {phase.title}
                  </h3>

                </div>

              </div>

              {/* Body */}
              <div className="p-8 grid lg:grid-cols-2 gap-8">

                {/* Descripción */}
                <div>

                  <p className="text-green-100/80 leading-relaxed text-lg mb-6">
                    {phase.description}
                  </p>

                  <div className="bg-slate-950 border border-green-950 rounded-2xl overflow-hidden">

                    <div className="flex items-center gap-2 px-5 py-4 border-b border-green-950">

                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>

                    </div>

                    <pre className="p-5 overflow-x-auto text-sm text-green-400 font-mono leading-relaxed">
{phase.code}
                    </pre>

                  </div>

                </div>

                {/* Resultado */}
                <div>

                  <div className="bg-slate-950 border border-green-950 rounded-2xl overflow-hidden h-full">

                    <div className="px-5 py-4 border-b border-green-950 bg-green-950/20">

                      <h4 className="font-semibold text-green-300">
                        Resultado del análisis
                      </h4>

                    </div>

                    <pre className="p-5 overflow-x-auto text-sm text-green-200/90 font-mono leading-relaxed">
{phase.result}
                    </pre>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}