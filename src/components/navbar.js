"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-green-900/40 bg-slate-950/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-2xl text-green-400 tracking-wide hover:text-green-300 transition-colors">
          Vitally - Compiler
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-base font-semibold text-green-100">

          <li>
            <a
              href="#introduccion"
              className="hover:text-green-300 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] transition-all duration-300"
            >
              Introducción
            </a>
          </li>

          <li>
            <a
              href="#lenguaje"
              className="hover:text-green-300 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] transition-all duration-300"
            >
              Lenguaje
            </a>
          </li>

          <li>
            <a
              href="#fases"
              className="hover:text-green-300 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] transition-all duration-300"
            >
              Fases
            </a>
          </li>

          <li>
            <a
              href="#demo"
              className="hover:text-green-300 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] transition-all duration-300"
            >
              Demo
            </a>
          </li>

          <li>
            <a
              href="#repo"
              className="hover:text-green-300 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] transition-all duration-300"
            >
              Repositorio
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-100 text-2xl hover:text-green-400 transition-colors"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-green-900/40 bg-slate-950 px-6 py-4">

          <ul className="flex flex-col gap-4 text-green-100 font-medium text-lg">

            <li>
              <a
                href="#introduccion"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-300 transition-colors"
              >
                Introducción
              </a>
            </li>

            <li>
              <a
                href="#lenguaje"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-300 transition-colors"
              >
                Lenguaje
              </a>
            </li>

            <li>
              <a
                href="#fases"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-300 transition-colors"
              >
                Fases
              </a>
            </li>

            <li>
              <a
                href="#demo"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-300 transition-colors"
              >
                Demo
              </a>
            </li>

            <li>
              <a
                href="#repo"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-300 transition-colors"
              >
                Repositorio
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}