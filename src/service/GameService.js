const Computer = require('../model/Computer');
const Referee = require('../model/Referee');

class GameService {
  static #instance;
  #answers;

  constructor() {
    if (GameService.#instance !== undefined) return GameService.#instance;
    GameService.#instance = this;
    this.#answers = new Computer([]).makeUniqueNumber();
  }

  scorePlayerNumber(players) {
    return new Referee(0, 0).isHit(this.#answers, players);
  }

  changeAnswer() {
    this.#answers = new Computer([]).makeUniqueNumber();
  }
}

module.exports = GameService;
