const MissionUtils = require('@woowacourse/mission-utils');
const handleException = require('./model/Validation');

class App {
  constructor() {
    this.answer = this.makeRandomNumber();
    this.isTyping = true;
  }
}

module.exports = App;
