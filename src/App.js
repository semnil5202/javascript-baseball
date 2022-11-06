const MissionUtils = require("@woowacourse/mission-utils");
const handleException = require("./handleException");
const calculateScore = require("./calculateScore");

class App {
  constructor() {
    this.answer = this.makeRandomNumber();
    this.isContinue = true;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.enterAnswer();
  }

  makeRandomNumber() {
    const results = [];
    while (results.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!results.includes(number)) results.push(number);
    }
    return results;
  }

  enterAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputs = input.split("").map((i) => Number(i));
      if (!handleException(inputs)) throw "입력 형식이 잘못되었습니다.";
      const score = calculateScore(this.answer, inputs);
      const print = this.printScore(score);
      MissionUtils.Console.print(print);
      if (this.isContinue) this.enterAnswer();
      else this.isContinueGame();
    });
  }

  printScore({ strike, ball }) {
    if (strike === 3) {
      this.isContinue = false;
      return `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }
    if (strike !== 0 && ball === 0) return `${strike}스트라이크`;
    if (strike === 0 && ball !== 0) return `${ball}볼`;
    if (strike === 0 && ball === 0) return "낫싱";
    return `${ball}볼 ${strike}스트라이크`;
  }

  isContinueGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : \n",
      (input) => {
        if (Number(input) === 1) {
          this.isContinue = true;
          this.answer = this.makeRandomNumber();
          this.enterAnswer();
        }
        if (Number(input) === 2) {
          MissionUtils.Console.print("게임을 종료합니다.");
          MissionUtils.Console.close();
        }
      }
    );
  }
}

module.exports = App;
