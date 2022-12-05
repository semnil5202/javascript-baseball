const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const GameService = require('../service/GameService');

class GameController {
  #gameService;

  constructor(gameService) {
    this.#gameService = gameService;
  }

  start() {
    OutputView.startMent();
    this.inputBalls();
  }

  inputBalls() {
    const inputBalls = (input) => {
      const players = input.split('').map((i) => Number(i));
      const result = this.#gameService.checkPlayerNumber(players);
      this.isEndGame(result.end);
    };
    InputView.inputNumber(inputBalls);
  }

  isEndGame(end) {
    if (end) this.inputNewGame();
    if (!end) this.inputBalls();
  }

  inputNewGame() {
    const inputNewGame = (input) => {
      const reGame = Number(input);
      this.isReGame(reGame);
    };
    InputView.inputNewGame(inputNewGame);
  }

  isReGame(reGame) {
    if (reGame === 1) this.start();
    if (reGame === 2) {
      OutputView.endMent();
      InputView.closeInput();
    }
  }
}

module.exports = GameController;
