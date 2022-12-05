const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Referee = require('../model/Referee');
const Computer = require('../model/Computer');

class GameController {
  start() {
    OutputView.startMent();
    this.inputBalls();
  }

  inputBalls() {
    const inputBalls = (input) => {
      const players = input.split('').map((i) => Number(i));
      const result = new Referee().isHit(Computer.makeUniqueNumber(), players);
    };
    InputView.inputNumber(inputBalls);
  }
}

module.exports = GameController;
