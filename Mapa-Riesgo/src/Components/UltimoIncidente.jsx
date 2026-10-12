function UltimoIncidente({ incidente }) {
  return (
    <div>
      <section>
        <header>
          {incidente.zona},{incidente.tiempo}
        </header>
        
        {/*contenido*/}
        <div>
          <h2>{incidente.titulo}</h2>

          {/*nivel de riesgo*/}
          <div>
            <span>Tipo de Riesgo: </span>
            <span>{incidente.nivelRiesgo}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default UltimoIncidente;
