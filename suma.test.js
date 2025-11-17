const { sumar, restar } = require('./suma'); // Fíjate en las llaves {}

test('Suma 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('Resta 5 - 2 deberia ser 3', () => {
  expect(restar(5, 2)).toBe(3);
});