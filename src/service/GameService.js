const Computer = require('../model/Computer');
const Referee = require('../model/Referee');

class GameService {
  #answers;

  constructor() {
    this.#answers = Computer.makeUniqueNumber();
  }

  checkPlayerNumber(players) {
    return new Referee(0, 0).isHit(this.#answers, players);
  }

  changeAnswer() {
    this.#answers = Computer.makeUniqueNumber();
  }
}

module.exports = GameService;
