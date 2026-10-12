function UltimoIncidente({ incidente }) {
    const {zona,tiempo,titulo,nivelRiesgo} = incidente
  return (
    <div className="">
      <section className="overflow-hidden rounded-lg border border-slate-700 bg-[#1B2B3A]">
        <header className="border-b border-slate-700 px-4 py-3 text-slate-300">
            <span className="">
                {zona}, {tiempo}
            </span>
          
        </header>

        {/*contenido*/}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-white">{titulo}</h2>

          {/*nivel de riesgo*/}
          <div className="mt-6 flex items-center gap-2">
            <span className="rounded-full bg-gray-500 px-3 py-1 text-sm text-white">Tipo de Riesgo: </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-sm text-white">{nivelRiesgo}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default UltimoIncidente;
