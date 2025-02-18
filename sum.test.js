const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 11 + 12 to equal 23', () => {
    expect(sum(11, 12)).toBe(23);
  });