import AccionesRapidas from "../Components/AccionesRapidas";
import InformacionMapa from "../Components/InformacionMapa";
import Navbar from "../Components/Navbar";
import UltimoIncidente from "../Components/UltimoIncidente";

function Home() {
  const incidenteReciente = {
    zona: "Zona Norte",
    tiempo: "hace 20 minutos",
    titulo: "Incidente de alto riesgo reportado en Av. Belgrano",
    nivelRiesgo: "A",
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto mt-6 w-full max-w-6xl space-y-6 px-4">
        <UltimoIncidente incidente={incidenteReciente}></UltimoIncidente>
        <AccionesRapidas />
        <InformacionMapa
          titulo="¿Que es el mapa de riesgo?"
          descripcion="Texto sobre el mapa Lorem ipsum dolor sit amet consectetur adipisicing"
        />
      </main>
    </div>
  );
}
export default Home;
