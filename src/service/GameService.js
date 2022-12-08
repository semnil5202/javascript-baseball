const Computer = require('../model/Computer');
const Referee = require('../model/Referee');

class GameService {
  #answers;

  constructor() {
    this.#answers = new Computer([]).makeUniqueNumber();
  }

  scorePlayerNumber(players) {
    return Referee.isHit(this.#answers, players);
  }

  changeAnswer() {
    this.#answers = new Computer([]).makeUniqueNumber();
  }
}

module.exports = GameService;
