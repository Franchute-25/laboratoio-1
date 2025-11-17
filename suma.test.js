const { sumar, restar, multiplicar } = require('./suma'); // <--- Agrega multiplicar aquí arriba

test('Suma 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('Resta 5 - 2 deberia ser 3', () => {
  expect(restar(5, 2)).toBe(3);
});

// Test Nuevo
test('Multiplicar 2 * 3 es igual a 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});