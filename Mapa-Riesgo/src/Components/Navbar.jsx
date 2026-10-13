import { useState } from "react";

function Navbar() {
  const [abierto, setAbierto] = useState(false);
  return (
    <nav className="bg-[#1B2B3A] p-4 text-white md:flex md:items-center md:justify-around">
      <div className="flex w-full items-center justify-between md:w-auto">
        <a href="/" className="whitespace-nowrap text-xl font-bold">
          <i className="bi bi-geo-alt-fill"></i> MAPA DE RIESGO
        </a>

        {/* boton hamburguesa*/}
        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          aria-label="Abrir menú"
          aria-expanded={abierto}
          className="w-auto shrink-0 rounded-md border border-slate-600 px-3 py-1 text-2xl md:hidden"
        >
          <i className={abierto ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>
      </div>

      <ul
        className={`${abierto ? "flex" : "hidden"} mt-4 flex-col gap-4 md:mt-0 md:flex md:flex-row`}
      >
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/Mapa">Mapa</a>
        </li>
        <li>
          <a href="/denuncia">Agregar denuncia</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
