const Validation = require('../src/util/Validation');
const { ERROR } = require('../src/util/constant');

describe('사용자 입력 예외 처리 테스트', () => {
  test('소수 값 예외 처리 테스트', () => {
    expect(() => {
      Validation.validateBall([1, 3.2, 5]);
    }).toThrow(ERROR.INTEGER);
  });

  test.each([[['a', 3, 9]], [[1, '!', 2]], [[9, 'ㄱ', 4]]])(
    '숫자 외 문자 값 예외 처리 테스트',
    (input) => {
      expect(() => {
        Validation.validateBall(input);
      }).toThrow(ERROR.NUMBER);
    },
  );

  test('중복 숫자 예외 처리 테스트', () => {
    expect(() => {
      Validation.validateBall([1, 1, 3]);
    }).toThrow(ERROR.DUPLICATE);
  });

  test.each([[[1, 2, 3, 4], [5, 6], [7]]])('세자리 수가 아닌 숫자 예외 처리 테스트', (input) => {
    expect(() => {
      Validation.validateBall(input);
    }).toThrow(ERROR.LENGTH);
  });

  test('숫자 0 예외 처리 테스트', () => {
    expect(() => {
      Validation.validateBall([0, 1, 2]);
    }).toThrow(ERROR.ZERO);
  });
});

test.each([[0], [3], ['R'], ['a'], ['ㄱ'], ['!']])(
  '게임 재시작 및 종료 예외 처리 테스트',
  (input) => {
    expect(() => {
      Validation.validateReGame(input);
    }).toThrow(ERROR.REGAME);
  },
);
