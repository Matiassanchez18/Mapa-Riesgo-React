function Navbar() {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-around text-white bg-[#1B2B3A] p-4 ">
        <a href="/" className="text-xl font-bold mb-4 md:mb-0">
          <i className="bi bi-geo-alt-fill"></i> MAPA DE RIESGO
        </a>    

        <ul className="flex flex-col md:flex-row gap-4">
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
    </div>
  );
}

export default Navbar;
