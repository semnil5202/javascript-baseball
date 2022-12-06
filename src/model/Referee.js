const { OUTPUT } = require('../util/constant');

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
    return { result: this.getResult(), end: this.isEndGame() };
  }

  scorePlayers({ answers, players, index }) {
    if (answers[index] === players[index]) this.#strike += 1;
    else if (answers.includes(players[index])) this.#ball += 1;
  }

  isEndGame() {
    if (this.#strike === 3) return true;
    return false;
  }

  getResult() {
    if (this.#strike === 3) return OUTPUT.WIN(this.#strike);
    if (this.#strike !== 0 && this.#ball === 0) return OUTPUT.STRIKE(this.#strike);
    if (this.#strike === 0 && this.#ball !== 0) return OUTPUT.BALL(this.#ball);
    if (this.#strike === 0 && this.#ball === 0) return OUTPUT.NOTHING;
    return OUTPUT.BALL_STRIKE(this.#ball, this.#strike);
  }
}

module.exports = Referee;
