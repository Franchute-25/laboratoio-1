const express = require('express');
const app = express();
const { sumar, multiplicar } = require('./suma'); // Importamos multiplicar
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const resultado = sumar(2, 2);
  res.send(`Inicio: La suma de 2 + 2 es ${resultado}. <br> Ve a /multiplicar para ver la nueva funcion.`);
});

// Nueva página
app.get('/multiplicar', (req, res) => {
  const resultado = multiplicar(5, 5);
  res.send(`¡Mantenimiento Evolutivo! 5 x 5 es: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});