export default function Language() {
  return (
    <section id="lenguaje" className="p-20 bg-green-50">
      <h2 className="text-3xl font-bold mb-6">Lenguaje</h2>

      <p className="text-gray-700 mb-6">
        El lenguaje diseñado permite describir pacientes, rutinas y dietas mediante
        instrucciones estructuradas.
      </p>

      <h3 className="font-semibold mb-2">Estructura básica:</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm mb-6 overflow-x-auto">
{`INICIO
PACIENTE: Sofia;
EDAD: 25;

RUTINA: basica;
ACCION: caminar * 10;
FIN`}
      </pre>

      <h3 className="font-semibold mb-2">Elementos del lenguaje:</h3>

      <ul className="text-gray-700 list-disc ml-6">
        <li>Palabras reservadas: INICIO, FIN, PACIENTE, RUTINA</li>
        <li>Identificadores: nombres de pacientes o rutinas</li>
        <li>Operadores: *, +, &gt;, &lt;, ==</li>
        <li>Símbolos: ;, :, &lt; &gt;</li>
      </ul>
    </section>
  );
}