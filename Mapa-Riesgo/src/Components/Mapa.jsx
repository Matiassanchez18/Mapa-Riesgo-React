import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Style/Mapa.css";

function Mapa() {
  return (
    <div>
      <container>
        <div className="flex w-full max-w-xl mx-auto p-2 mt-2">
          <input
            type="text"
            placeholder="Buscar zona o dirección"
            aria-label="Buscar zona o dirección"
            className="flex-1 min-w-0 rounded-l-lg border border-gray-600 bg-white text-dark px-4 py-2 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          <button
            type="button"
            className="rounded-r-lg border border-gray-500 bg-transparent px-4 py-2 text-gray-300 transition hover:bg-gray-700 hover:text-white"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="container container mx-auto px-4">
          <MapContainer
            center={[-26.8241, -65.2226]}
            zoom={13}
            id="map"
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
            />
          </MapContainer>
        </div>
      </container>
    </div>
  );
}

export default Mapa;
