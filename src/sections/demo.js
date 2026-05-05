export default function Demo() {
  return (
    <section id="demo" className="p-20 bg-green-50">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Demostración del Compilador
      </h2>

      <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        A continuación se muestran capturas reales del funcionamiento del compilador,
        incluyendo su interfaz principal y el comportamiento de cada fase del proceso.
      </p>

      {/* DASHBOARD */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Interfaz del Sistema
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/images/Dashboardvitally.png" 
              alt="Dashboard principal"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Vista principal del compilador
            </p>
          </div>

          <div>
            <img 
              src="/images/Dashboard2.png" 
              alt="Dashboard secundario"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Interacción con el sistema
            </p>
          </div>
        </div>
      </div>

      {/* FASES */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Funcionamiento por Fases
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <img 
              src="/images/faselexica.png" 
              alt="Fase léxica"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Análisis léxico del código fuente
            </p>
          </div>

          <div>
            <img 
              src="/images/fasesintactica.png" 
              alt="Fase sintáctica"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Validación de la estructura del programa
            </p>
          </div>

          <div>
            <img 
              src="/images/fasesemantica.png" 
              alt="Fase semántica"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Verificación de reglas lógicas y datos
            </p>
          </div>

          <div>
            <img 
              src="/images/faseia.png" 
              alt="Generación con IA"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Generación del resultado con inteligencia artificial
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}