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
    if (this.#strike !== 0 && this.#ball === 0) return `${this.#strike}스트라이크`;
    if (this.#strike === 0 && this.#ball !== 0) return `${this.#ball}볼`;
    if (this.#strike === 0 && this.#ball === 0) return '낫싱';
    return `${this.#ball}볼 ${this.#strike}스트라이크`;
  }
}

module.exports = Referee;
