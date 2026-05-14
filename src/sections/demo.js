export default function Demo() {

  const dashboardImages = [
    {
      src: "/images/Dashboardvitally.png",
      alt: "Dashboard principal",
      caption: "Vista principal del compilador",
    },
    {
      src: "/images/Dashboard2.png",
      alt: "Dashboard secundario",
      caption: "Interacción con el sistema",
    },
  ];

  const phaseImages = [
    {
      src: "/images/faselexica.png",
      alt: "Fase léxica",
      caption: "Análisis léxico del código fuente",
    },
    {
      src: "/images/fasesintactica.png",
      alt: "Fase sintáctica",
      caption: "Validación de la estructura del programa",
    },
    {
      src: "/images/fasesemantica.png",
      alt: "Fase semántica",
      caption: "Verificación de reglas lógicas y datos",
    },
    {
      src: "/images/faseia.png",
      alt: "Generación con IA",
      caption: "Generación del resultado con inteligencia artificial",
    },
  ];

  const imageFrame = (image) => (
    <div className="bg-slate-900/80 backdrop-blur-sm border border-green-950 rounded-3xl overflow-hidden hover:border-green-800 transition-colors">

      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-green-950 bg-slate-950">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>

      {/* IMAGE */}
      <div className="bg-slate-950 p-6 flex justify-center items-center">

        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-contain rounded-xl transition-transform duration-300 hover:scale-[1.02] max-h-[700px] md:max-h-[650px]"
        />

      </div>

      {/* Caption */}
      <div className="p-5">
        <p className="text-green-100/80 text-center">
          {image.caption}
        </p>
      </div>

    </div>
  );

  return (
    <section
      id="demo"
      className="px-6 py-24 bg-gradient-to-b from-slate-950 to-green-950 text-white"
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">

          <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
            Sección 04
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Demostración del Compilador
          </h2>

          <div className="w-24 h-1 bg-green-500 rounded-full mx-auto mb-8"></div>

          <p className="text-green-100/80 text-lg leading-relaxed max-w-3xl mx-auto">
            A continuación se muestran capturas reales del funcionamiento del compilador,
            incluyendo su interfaz principal y el comportamiento de cada fase del proceso.
          </p>

        </div>

        {/* DASHBOARD */}
        <div className="mb-24 space-y-10">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-3 h-3 rounded-full bg-green-400"></div>

            <h3 className="text-3xl font-semibold text-green-300">
              Interfaz del Sistema
            </h3>

          </div>

          {/* FIX IMPORTANTE: sin recorte */}
          <div className="mb-6 scale-95 md:scale-100">
            {imageFrame(dashboardImages[0])}
          </div>

          {/* resto normal */}
          {imageFrame(dashboardImages[1])}

        </div>

        {/* FASES */}
        <div className="space-y-12">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-3 h-3 rounded-full bg-green-400"></div>

            <h3 className="text-3xl font-semibold text-green-300">
              Funcionamiento por Fases
            </h3>

          </div>

          <div className="space-y-12">

            {phaseImages.map((img, i) => (
              <div key={i}>
                {imageFrame(img)}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}