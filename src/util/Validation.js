const { ERROR } = require('./constant');

const Validation = {
  validateBall(numbers) {
    if (numbers.join('').includes('.')) throw new Error(ERROR.INTEGER);
    if (Number.isNaN(Number(numbers.join('')))) throw new Error(ERROR.NUMBER);
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.DUPLICATE);
    if (numbers.length !== 3) throw new Error(ERROR.LENGTH);
    if (numbers.includes(0)) throw new Error(ERROR.ZERO);
  },

  validateReGame(number) {
    if (number !== 1 && number !== 2) throw new Error(ERROR.REGAME);
  },
};

module.exports = Validation;
