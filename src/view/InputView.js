const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  inputNumber(callback) {
    Console.readLine('숫자를 입력하세요 : ', callback);
  },

  inputNewGame(callback) {
    Console.readLine('게임을 새로 시작 1, 종료 2 : \n', callback);
  },

  closeInput() {
    Console.close();
  },
};

module.exports = InputView;
