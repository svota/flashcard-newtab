const Deck = require("../../src/deck.js");

test("Can add a card to the deck", () => {
  const deck = new Deck();
  deck.addCard();
  expect(deck).toBeDefined();
});

test("Can view an added card", () => {
  const deck = new Deck();
  deck.addCard("mesa", "table", 0);
  const card = deck.getCardByID(0);
  expect(card).toBeDefined();
  expect(card.id).toBe(0);
  expect(card.front).toBe("mesa");
  expect(card.back).toBe("table");
});

test("Can search by id", () => {
  const deck = new Deck();
  deck.addCard("mesa", "table", 0);
  deck.addCard("桌子", "table", 1);
  deck.addCard("стол", "table", 2);

  const card = deck.getCardByID(0);
  expect(card).toBeDefined();
  expect(card.id).toBe(0);
  expect(card.front).toBe("mesa");
  expect(card.back).toBe("table");

  const card2 = deck.getCardByID(1);
  expect(card2).toBeDefined();
  expect(card2.id).toBe(1);
  expect(card2.front).toBe("桌子");
  expect(card2.back).toBe("table");
});

test("Can search by front", () => {
  const deck = new Deck();
  deck.addCard("mesa", "table", 0);
  deck.addCard("桌子", "table", 1);
  deck.addCard("стол", "table", 2);

  const card = deck.getCardByFront("mesa");
  expect(card).toBeDefined();
  expect(card.id).toBe(0);
  expect(card.front).toBe("mesa");
  expect(card.back).toBe("table");

  const card2 = deck.getCardByFront("桌子");
  expect(card2).toBeDefined();
  expect(card2.id).toBe(1);
  expect(card2.front).toBe("桌子");
  expect(card2.back).toBe("table");
});

test("Can choose a card for testing", () => {
  const deck = new Deck();
  deck.addCard("mesa", "table", 0);

  const card = deck.nextCard();
  expect(card).toBeDefined();
  expect(card.id).toBe(0);
  expect(card.front).toBe("mesa");
  expect(card.back).toBe("table");
});
