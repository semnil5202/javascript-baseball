const OUTPUT = Object.freeze({
  WIN: (strike) => `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  NOTHING: '낫싱',
  BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
});

module.exports = { OUTPUT };
