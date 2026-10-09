import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mapa() {
  return (
    <MapContainer
      center={[-26.8241, -65.2226]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution="&copy; OpenStreetMap"
      />
    </MapContainer>
  );
}

export default Mapa;
