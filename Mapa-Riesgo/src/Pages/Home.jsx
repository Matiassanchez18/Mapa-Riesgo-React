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
      <Navbar></Navbar>
      <main>
        <UltimoIncidente incidente={incidenteReciente}></UltimoIncidente>
        
      </main>

      



      

    </div>
  );
}
export default Home;
