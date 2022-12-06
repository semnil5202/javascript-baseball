class ResultDto {
  #result;
  #isEnd;

  constructor(result, isEnd) {
    this.#result = result;
    this.#isEnd = isEnd;
  }

  getResult() {
    return this.#result;
  }

  getIsEnd() {
    return this.#isEnd;
  }
}

module.exports = ResultDto;
