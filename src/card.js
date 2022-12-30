const generateID = () => Math.floor(Math.random() * 1000000000);

class Card {
  constructor(front = "", back = "", id = generateID()) {
    return {
      id,
      front,
      back,
    };
  }
}

module.exports = Card;
