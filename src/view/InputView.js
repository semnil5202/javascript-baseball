const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  inputNumber(callback) {
    Console.readLine('숫자를 입력하세요 : ', callback);
  },
};

module.exports = InputView;
