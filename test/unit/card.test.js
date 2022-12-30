const Card = require('../../src/card.js');

test('card creates a card', () => {
  const card = new Card();
  expect(card.id).toBeDefined();
  expect(card.front).toBeDefined();
  expect(card.back).toBeDefined();
})

test('card creates a card with the given front and back', () => {
  const card = new Card("中国", "China");
  expect(card.front).toBe("中国");
  expect(card.back).toBe("China");
})

test('card creates a card with the given id', () => {
  const card = new Card("中国", "China", 0);
  expect(card.id).toBe(0);

  const card2 = new Card("中国", "China", 1);
  expect(card2.id).toBe(1);
})
