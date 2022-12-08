const { UTIL, OUTPUT } = require('../util/constant');
const ResultDto = require('../dto/ResultDto');

class Referee {
  static #instance;
  #strike;
  #ball;

  constructor(strike, ball) {
    if (Referee.#instance !== undefined) return Referee.#instance;
    Referee.#instance = this;

    this.#strike = strike;
    this.#ball = ball;
  }

  isHit(answers, players) {
    this.#strike = 0;
    this.#ball = 0;
    answers.forEach((_, index) => {
      this.#scorePlayers({ answers, players, index });
    });
    return new ResultDto(this.#calculatePlayers().result, this.#calculatePlayers().isEnd);
  }

  #scorePlayers({ answers, players, index }) {
    if (answers[index] === players[index]) this.#strike += 1;
    else if (answers.includes(players[index])) this.#ball += 1;
  }

  #calculatePlayers() {
    if (this.#strike === UTIL.ALL_HIT) return { result: OUTPUT.WIN(this.#strike), isEnd: true };
    if (this.#strike !== UTIL.NO_HIT && this.#ball === UTIL.NO_HIT) {
      return { result: OUTPUT.STRIKE(this.#strike), isEnd: false };
    }
    if (this.#strike === UTIL.NO_HIT && this.#ball !== UTIL.NO_HIT) {
      return { result: OUTPUT.BALL(this.#ball), isEnd: false };
    }
    if (this.#strike === UTIL.NO_HIT && this.#ball === UTIL.NO_HIT) {
      return { result: OUTPUT.NOTHING, isEnd: false };
    }
    return { result: OUTPUT.BALL_STRIKE(this.#ball, this.#strike), isEnd: false };
  }
}

module.exports = Referee;
