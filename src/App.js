const GameController = require('./controller/GameController');
const GameService = require('./service/GameService');

class App {
  play() {
    const gameController = new GameController(new GameService());
    gameController.start();
  }
}

module.exports = App;
