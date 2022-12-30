const Card = require('./card.js');

class Deck {
  #deck
  constructor() {
    this.#deck = [];
  }

  addCard(front, back, id) {
    this.#deck.push(new Card(front, back, id));
  }

  getCardByID(id) {
    return this.#deck.find((card) => card.id == id);
  }

  getCardByFront(front) {
    return this.#deck.find((card) => card.front == front);
  }

  nextCard() {
    const ind = Math.floor(Math.random() * this.#deck.length);
    return this.#deck[ind];
  }
}

module.exports = Deck;
