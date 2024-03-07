// Importamos el paquete express
const express = require('express');
// Para subir imágenes
const multer = require('multer');

// Creamos una instancia de express
const app = express();

// Configuramos el almacenamiento de imágenes
const storage = multer.diskStorage({
  // Dirección de destino
  destination: './uploads',
  // Función para el nombre de la imagen
  filename: (req, file, cb) => {
    // Nombre de la imagen
    cb(null, file.originalname);
  }
});

// Configuramos el middleware de multer
const upload = multer({ storage });

// Función para subir imágenes
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Imagen subida correctamente');
});

// Escuchamos en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
