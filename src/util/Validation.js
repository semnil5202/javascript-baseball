const Validation = {
  validateBall(numbers) {
    if (numbers.join('').includes('.')) throw new Error('[ERROR]');
    if (Number.isNaN(Number(numbers.join('')))) throw new Error('[ERROR]');
    if (numbers.length !== new Set(numbers).size) throw new Error('[ERROR]');
    if (numbers.length !== 3) throw new Error('[ERROR]');
    if (numbers.includes(0)) throw new Error('[ERROR]');
  },

  validateReGame(number) {
    if (number !== 1 && number !== 2) throw new Error('[ERROR]');
  },
};

module.exports = Validation;
