export default function Repository() {
  return (
    <section id="repo" className="p-20">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Repositorio del Proyecto
      </h2>

      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        El código fuente completo del compilador está disponible en GitHub.
        Puedes revisarlo para entender su implementación, estructura y funcionamiento interno.
      </p>

      <div className="flex justify-center">
        <a
          href="https://github.com/Ruben-online/lexical-analyzer.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Ver repositorio en GitHub
        </a>
      </div>

    </section>
  );
}