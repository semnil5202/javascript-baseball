class Referee {
  #strike;
  #ball;

  isHit(answers, players) {
    answers.forEach((_, index) => {
      this.scorePlayers({ answers, players, index });
    });
    return { strike: this.#strike, ball: this.#ball, end: this.isEndGame() };
  }

  scorePlayers({ answers, players, index }) {
    if (answers[index] === players[index]) this.#strike += 1;
    else if (answers.includes(players[index])) this.#ball += 1;
  }

  isEndGame() {
    if (this.#strike === 3) return true;
    return false;
  }
}

module.exports = Referee;
