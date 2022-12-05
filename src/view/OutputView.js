const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  startMent() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  endMent() {
    Console.print('게임을 종료합니다.');
  },
};

module.exports = OutputView;
