import React, { useState } from 'react';

const TxtFileUploader = () => {
  const [error, setError] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop();
      if (extension === 'txt') {
        // Aquí puedes manejar la lógica para cargar el archivo .txt
        console.log('Archivo .txt cargado:', file);
      } else {
        setError('Por favor, seleccione un archivo .txt');
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TxtFileUploader;
