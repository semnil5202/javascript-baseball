const Computer = require('../src/model/Computer');

beforeEach(() => {});

describe('정답 생성 테스트', () => {
  test('3자리 수의 정답을 생성하는지 테스트', () => {
    expect(new Computer([]).makeUniqueNumber().length).toBe(3);
  });

  test('중복된 수가 없는지 테스트', () => {
    const computer = new Computer([]);
    computer.isUnique(1);
    computer.isUnique(1);
    computer.isUnique(3);
    computer.isUnique(5);

    const answers = computer.makeUniqueNumber();
    expect(answers).toEqual([1, 3, 5]);
  });
});
