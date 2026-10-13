import AccionesRapidas from "../Components/AccionesRapidas";
import Navbar from "../Components/Navbar";
import UltimoIncidente from "../Components/UltimoIncidente";

function Home() {

    const incidenteReciente = {
        zona: "Zona Norte",
        tiempo: "hace 20 minutos",
        titulo:"Incidente de alto riesgo reportado en Av. Belgrano",
        nivelRiesgo: "A"
    }

  return (
    <div>
      <Navbar />
      <main className="mx-auto mt-6 w-[90%] max-w-6xl space-y-6">
        <UltimoIncidente incidente={incidenteReciente}></UltimoIncidente>
        <AccionesRapidas />
        
      </main>

      



      

    </div>
  );
}
export default Home;
