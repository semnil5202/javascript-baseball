const { Random } = require('@woowacourse/mission-utils');
const { UTIL } = require('../util/constant');

class Computer {
  #answers;

  constructor(answers) {
    this.#answers = answers;
  }

  makeUniqueNumber() {
    while (this.#answers.length !== UTIL.LENGTH) {
      this.isUnique(this.makeRandomNumber());
    }
    return this.#answers;
  }

  makeRandomNumber() {
    return Random.pickNumberInRange(UTIL.MIN, UTIL.MAX);
  }

  isUnique(number) {
    if (!this.#answers.includes(number)) this.#answers.push(number);
  }
}

module.exports = Computer;
