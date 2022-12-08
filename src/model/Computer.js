const { Random } = require('@woowacourse/mission-utils');
const { UTIL } = require('../util/constant');

const Computer = {
  makeUniqueNumber() {
    const answers = [];
    while (answers.length !== UTIL.LENGTH) this.isUnique(answers, this.makeRandomNumber());
    return answers;
  },

  makeRandomNumber() {
    return Random.pickNumberInRange(UTIL.MIN, UTIL.MAX);
  },

  isUnique(answers, number) {
    if (!answers.includes(number)) answers.push(number);
  },
};

module.exports = Computer;
