const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('../util/constant');

const InputView = {
  inputNumber(callback) {
    Console.readLine(INPUT.NUMBER, callback);
  },

  inputNewGame(callback) {
    Console.readLine(INPUT.REGAME, callback);
  },

  closeInput() {
    Console.close();
  },
};

module.exports = InputView;
