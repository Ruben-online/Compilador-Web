export default function Phases() {
  return (
    <section id="fases" className="p-20">
      <h2 className="text-3xl font-bold mb-10">
        Fases del Compilador
      </h2>

      {/* FASE 1 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">
          Fase 1: Analizador Léxico
        </h3>
        <p className="text-gray-700 mb-4">
          El analizador léxico se encarga de leer el código fuente carácter por carácter
          y convertirlo en tokens. Identifica palabras reservadas, identificadores,
          operadores, números y símbolos.
        </p>

        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm mb-4 overflow-x-auto">
{`INICIO
PACIENTE: Sofia;
EDAD: 25;
FIN`}
        </pre>

        <pre className="bg-gray-900 text-yellow-400 p-4 rounded text-sm overflow-x-auto">
{`Tokens:
INICIO → palabra reservada
PACIENTE → palabra reservada
Sofia → identificador
25 → número`}
        </pre>
      </div>

      {/* FASE 2 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">
          Fase 2: Analizador Sintáctico
        </h3>
        <p className="text-gray-700 mb-4">
          El analizador sintáctico verifica que los tokens sigan la estructura
          correcta del lenguaje. Se basa en reglas gramaticales (parser LL(1))
          y detecta errores en la construcción del programa.
        </p>

        <h4 className="font-semibold">Ejemplo válido:</h4>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm mb-4 overflow-x-auto">
{`SI EDAD > 20 ENTONCES
IMPRIMIR rutina;
FIN`}
        </pre>

        <h4 className="font-semibold">Ejemplo inválido:</h4>
        <pre className="bg-gray-900 text-red-400 p-4 rounded text-sm overflow-x-auto">
{`SI EDAD > 20
IMPRIMIR rutina;`}
        </pre>
        <p className="text-red-600 text-sm mt-2">
          Error: falta la palabra clave ENTONCES
        </p>

        <pre className="bg-gray-900 text-blue-400 p-4 rounded text-sm mt-4 overflow-x-auto">
{`Gramática básica:
PROGRAMA → INICIO BLOQUES FIN
SENTENCIA → SI CONDICION ENTONCES BLOQUE FIN`}
        </pre>
      </div>

      {/* FASE 3 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">
          Fase 3: Analizador Semántico
        </h3>
        <p className="text-gray-700 mb-4">
          Esta fase verifica que el programa tenga sentido lógico. Se valida que los
          datos sean correctos, que no existan duplicados y que las referencias sean válidas.
        </p>

        <h4 className="font-semibold">Ejemplo válido:</h4>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm mb-4 overflow-x-auto">
{`PACIENTE: Sofia;
EDAD: 25;
PESO: 60.5;`}
        </pre>

        <h4 className="font-semibold">Ejemplo inválido:</h4>
        <pre className="bg-gray-900 text-red-400 p-4 rounded text-sm overflow-x-auto">
{`PACIENTE: Sofia;
EDAD: 200;`}
        </pre>
        <p className="text-red-600 text-sm mt-2">
          Error: edad fuera de rango válido (1–120)
        </p>

        <pre className="bg-gray-900 text-yellow-400 p-4 rounded text-sm mt-4 overflow-x-auto">
{`Reglas semánticas:
SEM-01: PACIENTE debe declararse primero
SEM-02: No se permite duplicar paciente
SEM-04: EDAD debe estar entre 1 y 120
SEM-05: PESO debe estar entre 1.0 y 700.0
SEM-06: IMPRIMIR debe referenciar un bloque existente`}
        </pre>
      </div>

      {/* FASE 4 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">
          Fase 4: Tabla de Símbolos
        </h3>
        <p className="text-gray-700 mb-4">
          En esta fase se almacena toda la información relevante del programa,
          como el paciente, sus propiedades y los bloques definidos. Esta tabla
          permite validar referencias y organizar los datos correctamente.
        </p>

        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`Tabla de símbolos:

Paciente:
- nombre: Sofia
- edad: 25
- peso: 60.5

Rutina:
- nombre: basica
- acciones: caminar`}
        </pre>
      </div>

      {/* FASE 5 */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">
          Fase 5: Generación de Resultado
        </h3>
        <p className="text-gray-700 mb-4">
          En esta fase, el compilador genera un prompt estructurado que es enviado a
          un modelo de inteligencia artificial (Gemini). A partir de los datos del
          paciente, se obtiene un plan clínico en formato JSON que incluye rutinas,
          dieta y observaciones médicas personalizadas.
        </p>

        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "rutina": "caminar 10 repeticiones",
  "dieta": "plan balanceado",
  "observaciones": "evitar impacto lumbar"
}`}
        </pre>
      </div>

    </section>
  );
}