import React from "react";
import ReactDOM from "react-dom";
import UploadImage from "./componets/UploadImage";
import TxtFileUploader from "./componets/TxtFileUploader";
import MultiFileUploader from "./componets/MultiFileUploader";

import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <h1>Subir imágenes</h1>
        <UploadImage />
      </div>
      <div>
        <h1>Cargar Archivos .txt</h1>
        <TxtFileUploader />
        <h1>Cargar Varios Tipos de Archivos</h1>
        <MultiFileUploader />
      </div>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
