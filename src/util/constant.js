const UTIL = Object.freeze({
  MIN: 1,
  MAX: 9,
  REGAME: 1,
  ENDGAME: 2,
  LENGTH: 3,
  CRITERION: '',
  NO_HIT: 0,
  ALL_HIT: 3,
});

const INPUT = Object.freeze({
  NUMBER: '숫자를 입력해주세요 : ',
  REGAME: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const OUTPUT = Object.freeze({
  WIN: (strike) => `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  NOTHING: '낫싱',
  BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  START_GAME: '숫자 야구 게임을 시작합니다.',
  END_GAME: '게임을 종료합니다.',
});

const ERROR = Object.freeze({
  INTEGER: '[ERROR] 정수만 입력할 수 있습니다.',
  NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  DUPLICATE: '[ERROR] 중복된 숫자는 입력할 수 없습니다.',
  LENGTH: '[ERROR] 세 자리 수만 입력할 수 있습니다.',
  ZERO: '[ERROR] 숫자 0은 입력할 수 없습니다.',
  REGAME: '[ERROR] 재시작 1 또는 종료 2 외에는 입력할 수 없습니다.',
});

module.exports = { UTIL, INPUT, OUTPUT, ERROR };
