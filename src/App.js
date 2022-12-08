const GameController = require('./controller/GameController');
const GameService = require('./service/GameService');

class App {
  play() {
    new GameController(new GameService()).start();
  }
}

module.exports = App;
