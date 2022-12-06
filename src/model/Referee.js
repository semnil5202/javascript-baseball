const { OUTPUT } = require('../util/constant');
const ResultDto = require('../dto/ResultDto');

class Referee {
  #strike;
  #ball;

  constructor(strike, ball) {
    this.#strike = strike;
    this.#ball = ball;
  }

  isHit(answers, players) {
    answers.forEach((_, index) => {
      this.scorePlayers({ answers, players, index });
    });
    return new ResultDto(this.getResult().result, this.getResult().isEnd);
  }

  scorePlayers({ answers, players, index }) {
    if (answers[index] === players[index]) this.#strike += 1;
    else if (answers.includes(players[index])) this.#ball += 1;
  }

  getResult() {
    if (this.#strike === 3) return { result: OUTPUT.WIN(this.#strike), isEnd: true };
    if (this.#strike !== 0 && this.#ball === 0) {
      return { result: OUTPUT.STRIKE(this.#strike), isEnd: false };
    }
    if (this.#strike === 0 && this.#ball !== 0) {
      return { result: OUTPUT.BALL(this.#ball), isEnd: false };
    }
    if (this.#strike === 0 && this.#ball === 0) return { result: OUTPUT.NOTHING, isEnd: false };
    return { result: OUTPUT.BALL_STRIKE(this.#ball, this.#strike), isEnd: false };
  }
}

module.exports = Referee;
