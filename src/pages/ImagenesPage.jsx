import { useState } from "react";
import { createImagenRequest } from "../API/imagenUsuario.api";

function ImageForm() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nombre || !archivo) {
      setError("El nombre y el archivo son campos obligatorios");
      return;
    }

    try {
      const imagen = {
        nombre,
        descripcion,
        archivo,
      };

      const response = await createImagenRequest(imagen);

      console.log("Imagen creada:", response.data);

      // Reiniciar los valores del formulario después de enviar la imagen.
      setNombre("");
      setDescripcion("");
      setArchivo(null);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Se ha producido un error al crear la imagen");
    }
  };

  const handleFileChange = (event) => {
    const archivoSeleccionado = event.target.files[0];
    setArchivo(archivoSeleccionado);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="archivo">Archivo:</label>
        <input
          id="archivo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Crear imagen</button>
    </form>
  );
}

export default ImageForm;
