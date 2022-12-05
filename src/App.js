const MissionUtils = require('@woowacourse/mission-utils');
const handleException = require('./model/Validation');

class App {
  constructor() {
    this.answer = this.makeRandomNumber();
    this.isTyping = true;
  }

  printScore({ strike, ball }) {
    if (strike === 3) {
      this.isTyping = false;
      return `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }
    if (strike !== 0 && ball === 0) return `${strike}스트라이크`;
    if (strike === 0 && ball !== 0) return `${ball}볼`;
    if (strike === 0 && ball === 0) return '낫싱';
    return `${ball}볼 ${strike}스트라이크`;
  }
}

module.exports = App;
