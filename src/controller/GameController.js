const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const { UTIL } = require('../util/constant');

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
      const players = input.split(UTIL.CRITERION).map((i) => Number(i));
      const result = this.#gameService.checkPlayerNumber(players);
      OutputView.outputScore(result.getResult());
      this.isEndGame(result.getIsEnd());
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
    if (reGame === UTIL.REGAME) {
      this.#gameService.changeAnswer();
      this.inputBalls();
    }
    if (reGame === UTIL.ENDGAME) {
      OutputView.endMent();
      InputView.closeInput();
    }
  }
}

module.exports = GameController;
