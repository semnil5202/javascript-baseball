const Computer = require('../model/Computer');
const Referee = require('../model/Referee');

class GameService {
  checkPlayerNumber(players) {
    return new Referee().isHit(Computer.makeRandomNumber(), players);
  }
}

module.exports = GameService;
