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

  toReveal() {
    return new ResponseModel(this.#value, this.#correct, true);
  }

  convertToObject() {
    return {
      value: this.#value,
      correct: this.#correct,
      revealed: this.#revealed,
    };
  }
}
