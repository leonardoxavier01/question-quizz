export default class ResponseModel {
  #value: string;
  #correct: boolean;
  #revealed: boolean;

  constructor(value: string, correct: boolean, revealed = false) {
    this.#value = value;
    this.#correct = correct;
    this.#revealed = revealed;
  }

  static correct(value: string) {
    return new ResponseModel(value, true);
  }

  static incorrect(value: string) {
    return new ResponseModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get correct() {
    return this.#correct;
  }

  get revealed() {
    return this.#revealed;
  }

  convertToObject() {
    return {
      value: this.#value,
      correct: this.#revealed,
      revealed: this.#revealed,
    };
  }
}
