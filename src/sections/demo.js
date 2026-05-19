"use client";

import { useState } from "react";

export default function Demo() {

  const [selectedImage, setSelectedImage] = useState(null);

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
      title: "Fase Léxica",
      src: "/images/faselexica.png",
      alt: "Fase léxica",
      caption: "Análisis léxico del código fuente",
    },
    {
      title: "Fase Sintáctica",
      src: "/images/Fasesintactica.png",
      alt: "Fase sintáctica",
      caption: "Validación de la estructura del programa",
    },
    {
      title: "Fase Semántica",
      src: "/images/fasesemantica.png",
      alt: "Fase semántica",
      caption: "Verificación de reglas lógicas y datos",
    },
    {
      title: "Fase IA",
      src: "/images/faseia.png",
      alt: "Generación con IA",
      caption: "Generación del resultado con inteligencia artificial",
    },
  ];

  const imageFrame = (image, variant = "normal") => (
    <div className="space-y-4">

      {/* SUBTÍTULO */}
      {image.title && (
        <div className="flex items-center gap-3">

          <div className="w-2 h-2 rounded-full bg-green-400"></div>

          <h4 className="text-2xl font-semibold text-green-200">
            {image.title}
          </h4>

        </div>
      )}

      {/* CARD */}
      <div className="bg-slate-900/80 backdrop-blur-sm border border-green-950 rounded-3xl overflow-hidden hover:border-green-800 transition-colors">

        {/* Header */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-green-950 bg-slate-950">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        {/* IMAGE */}
        <div className="bg-slate-950 p-4 md:p-6 flex justify-center items-center">

          <img
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={`
              w-full object-contain rounded-xl transition-transform duration-300 hover:scale-[1.02] cursor-zoom-in
              ${
                variant === "main"
                  ? "max-h-[700px] md:max-h-[650px]"
                  : "max-h-[980px] md:max-h-[900px]"
              }
            `}
          />

        </div>

        {/* Caption */}
        <div className="p-5">
          <p className="text-green-100/80 text-center">
            {image.caption}
          </p>
        </div>

      </div>

    </div>
  );

  return (
    <>

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

            {/* Vista principal */}
            <div className="mb-6 scale-95 md:scale-100">
              {imageFrame(dashboardImages[0], "main")}
            </div>

            {/* Imagen secundaria */}
            {imageFrame(dashboardImages[1])}

          </div>

          {/* FASES */}
          <div className="space-y-14">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-3 h-3 rounded-full bg-green-400"></div>

              <h3 className="text-3xl font-semibold text-green-300">
                Funcionamiento por Fases
              </h3>

            </div>

            <div className="space-y-16">

              {phaseImages.map((img, i) => (
                <div key={i}>
                  {imageFrame(img)}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* MODAL / LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          <div className="relative w-full max-w-7xl">

            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 text-white text-4xl hover:text-green-400 transition-colors"
            >
              ×
            </button>

            {/* IMAGEN */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[90vh] object-contain rounded-2xl"
            />

            {/* TEXTO */}
            <p className="text-center text-green-100/80 mt-4 text-sm md:text-base">
              {selectedImage.caption}
            </p>

          </div>

        </div>
      )}

    </>
  );
}