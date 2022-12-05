const Computer = require('../model/Computer');
const Referee = require('../model/Referee');

class GameService {
  #answers;

  constructor() {
    this.#answers = Computer.makeRandomNumber();
  }

  checkPlayerNumber(players) {
    return new Referee().isHit(this.#answers, players);
  }

  changeAnswer() {
    this.#answers = Computer.makeRandomNumber();
  }
}

module.exports = GameService;
