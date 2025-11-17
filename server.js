const express = require('express');
const app = express();
const { sumar } = require('./suma'); // <--- ¡OJO! Agregamos las llaves { } aquí
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const resultado = sumar(2, 2);
  res.send(`Hola Mundo! Corrección aplicada. La suma de 2 + 2 es: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});