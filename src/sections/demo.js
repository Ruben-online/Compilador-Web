export default function Demo() {
  return (
    <section id="demo" className="p-20 bg-green-50">
      <h2 className="text-3xl font-bold mb-6">Demostración</h2>

      <p className="text-gray-700 mb-6">
        A continuación se muestra un ejemplo de entrada y el resultado generado por el compilador.
      </p>

      <h3 className="font-semibold">Entrada:</h3>
      <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm mb-6">
{`PACIENTE: Sofia;
EDAD: 25;
OBJETIVO: bajar_grasa;`}
      </pre>

      <h3 className="font-semibold">Salida:</h3>
      <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm">
{`Plan generado:
- Rutina: cardio moderado
- Dieta: balanceada`}
      </pre>
    </section>
  );
}