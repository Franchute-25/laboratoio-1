function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b; // <--- ¡Aquí estaba el error! Ya lo corregimos.
}

module.exports = { sumar, restar };