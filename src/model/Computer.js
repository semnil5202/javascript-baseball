const { Random } = require('@woowacourse/mission-utils');

const Computer = {
  makeUniqueNumber() {
    const answers = [];
    while (answers !== 3) this.isUnique(answers, this.makeRandomNumber());
    return answers;
  },

  makeRandomNumber() {
    return Random.pickNumberInRange(1, 9);
  },

  isUnique(answers, number) {
    if (!answers.includes(number)) answers.push(number);
  },
};

module.exports = Computer;
