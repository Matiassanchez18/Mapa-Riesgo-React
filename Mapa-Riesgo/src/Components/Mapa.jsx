import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Style/Mapa.css";
import ReporteMapa from "./ReporteMapa";

function Mapa() {
  const [modal, setModal] = useState(false);

  const modalHandle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div>
        <div className="flex w-full max-w-xl mx-auto p-2 mt-2">
          <input
            type="text"
            placeholder="Buscar zona o dirección"
            aria-label="Buscar zona o dirección"
            className="flex-1 min-w-0 rounded-l-lg border border-gray-600 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          <button
            type="button"
            aria-label="Buscar"
            className="rounded-r-lg border border-gray-500 bg-transparent px-4 py-2 text-gray-300 transition hover:bg-gray-700 hover:text-white"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="mapa-container">
          <div className="contendor-mapa">
            <MapContainer
              center={[-26.8241, -65.2226]}
              zoom={13}
              id="map"
              scrollWheelZoom={true}
            >
              <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={19}
                attribution="OpenStreetMap"
              />
            </MapContainer>

            <button
              type="button"
              onClick={modalHandle}
              className="botonReporte flex items-center gap-2 rounded-full bg-[#032f5c] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#064078] active:scale-95"
            >
              <i className="bi bi-plus-lg text-lg"></i>
              Reportar
            </button>

            <button
              type="button"
              aria-label="Agrandar mapa"
              className="btn-zoom flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#032f5c] text-lg text-white shadow-lg transition hover:bg-[#064078] active:scale-95"
            >
              <i className="bi bi-arrows-angle-expand"></i>
            </button>
          </div>
          {modal ? (
            <div className=" modal">
              <form
                className="form-reporte"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="reporte-card">
                  <button
                    type="button"
                    className="reporte-cerrar"
                    onClick={modalHandle}
                    aria-label="Cerrar formulario"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                  <div className="reporte-header">
                    <div className="reporte-icono">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>

                    <div>
                      <h2>Nuevo reporte</h2>
                    </div>
                  </div>

                  <form
                    className="reporte-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="reporte-campo">
                      <label htmlFor="hecho">Localidad del hecho</label>
                      <div className="reporte-input-icono">
                        <i className="bi bi-geo-alt"></i>
                        <input
                          type="text"
                          id="hecho"
                          placeholder="Ej. San Lorenzo 2100"
                          required
                        />
                      </div>
                    </div>

                    <div className="reporte-campo">
                      <label htmlFor="tipo">Tipo de robo</label>
                      <div className="reporte-input-icono">
                        <i className="bi bi-shield-exclamation"></i>
                        <select
                          id="tipo"
                          className="select w-full bg-[#111e2b] text-gray-100 border-none outline-none focus:ring-0"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Seleccioná el tipo de incidente
                          </option>
                          <option value="Arrebato">Arrebato</option>
                          <option value="Robo de celular">
                            Robo de celular
                          </option>
                          <option value="Robo de vehículo">
                            Robo de vehículo
                          </option>
                          <option value="Robo en vivienda">
                            Robo en vivienda
                          </option>
                          <option value="Intento de robo">
                            Intento de robo
                          </option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div className="reporte-campo">
                      <label>¿Hubo testigos?</label>

                      <div className="reporte-opciones">
                        <label className="reporte-opcion">
                          <input
                            type="radio"
                            name="testigos"
                            value="si"
                            required
                          />
                          <span>
                            <i className="bi bi-check-circle"></i>
                            Sí
                          </span>
                        </label>

                        <label className="reporte-opcion">
                          <input type="radio" name="testigos" value="no" />
                          <span>
                            <i className="bi bi-x-circle"></i>
                            No
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="reporte-campo">
                      <label htmlFor="descripcion">Descripción del hecho</label>
                      <textarea
                        id="descripcion"
                        rows={4}
                        placeholder="Contá brevemente qué pasó, dónde y cuándo..."
                      />
                      <small>
                        Cuanto más clara sea la descripción, más útil será para
                        otros usuarios.
                      </small>
                    </div>

                    <div className="reporte-acciones">
                      <button type="reset" className="reporte-btn-cancelar">
                        Limpiar
                      </button>

                      <button type="submit" className="reporte-btn-enviar">
                        <i className="bi bi-send"></i>
                        Enviar reporte
                      </button>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-4 position-[absolute]">
        <ReporteMapa />
      </div>
    </div>
  );
}

export default Mapa;
