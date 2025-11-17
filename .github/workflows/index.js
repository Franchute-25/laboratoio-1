const express = require('express');
const app = express();
const sumar = require('./suma'); // Aquí llamamos a tu lógica
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const resultado = sumar(2, 2);
  res.send(`Hola Mundo! Mi laboratorio funciona. La suma de 2 + 2 es: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});