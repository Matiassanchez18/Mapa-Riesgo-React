import { useState } from "react";
// import "../Style/reporte.css"; //

function Reporte() {
  const [datos, setDatos] = useState({
    lugar: "",
    fecha: "",
    descripcion: "",
    tipo: "",
    otroTipo: "",
    testigos: "",
    evidencia: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setDatos({ ...datos, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
  };

  return (
    <div className="card-reporte">
      <h1>Reportar un hecho</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Lugar y fecha</legend>
          <input
            type="text"
            name="lugar"
            value={datos.lugar}
            onChange={handleChange}
            placeholder="Lugar del hecho"
          />
          <input
            type="datetime-local"
            name="fecha"
            value={datos.fecha}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Descripción del hecho</legend>
          <textarea
            name="descripcion"
            value={datos.descripcion}
            onChange={handleChange}
          />

          <select name="tipo" value={datos.tipo} onChange={handleChange}>
            <option value="">Tipo de hecho</option>
            <option value="robo">Robo</option>
            <option value="accidente">Accidente</option>
            <option value ="violencia">Violencia</option>
            <option value="otro">Otro</option>
          </select>

          {datos.tipo === "otro" && (
            <input
              type="text"
              name="otroTipo"
              value={datos.otroTipo}
              onChange={handleChange}
              placeholder="Especificá el tipo"
            />
          )}

          <p>¿Hubo testigos?</p>
          <label>
            <input type="radio" name="testigos" value="si"
              checked={datos.testigos === "si"} onChange={handleChange} /> Sí
          </label>
          <label>
            <input type="radio" name="testigos" value="no"
              checked={datos.testigos === "no"} onChange={handleChange} /> No
          </label>
        </fieldset>

        <fieldset>
          <legend>Evidencia (opcional)</legend>
          <input type="file" name="evidencia" accept="image/*,video/*"
            onChange={handleChange} />
        </fieldset>

        <button type="submit">Enviar reporte</button>
      </form>
    </div>
  );
}

export default Reporte;