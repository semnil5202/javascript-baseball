const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('../util/constant');

const OutputView = {
  startMent() {
    Console.print(OUTPUT.START_GAME);
  },

  outputScore(resultString) {
    Console.print(resultString);
  },

  endMent() {
    Console.print(OUTPUT.END_GAME);
  },
};

module.exports = OutputView;
