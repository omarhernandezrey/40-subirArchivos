/*
Crear una aplicación React que permita al usuario
subir una imagen y mostrarla en pantalla.
*/
// Importar las librerías de React
import React, { useState } from "react";
// Importar Dropzone
import { useDropzone } from "react-dropzone";
// Importar Axios
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  // Función para subir la imagen al servidor
  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Cambia la URL de 'http://ejemplo.com/upload' por la URL correcta de tu servidor
      const response = await axios.post("http://ejemplo.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Imagen subida exitosamente:", response.data);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  return (
    <div>
      <h1>Subir Imagen</h1>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Arrastra una imagen aquí o haz clic para seleccionar una</p>
      </div>
      {file && (
        <div>
          <h2>Imagen Seleccionada:</h2>
          <img
            src={URL.createObjectURL(file)}
            alt="Imagen seleccionada"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
          <button onClick={handleUpload}>Subir Imagen</button>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default UploadImage;
