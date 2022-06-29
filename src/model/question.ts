import ResponseModel from "./response";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #responses: ResponseModel[];
  #gotHit: boolean;

  constructor(
    id: number,
    statement: string,
    responses: ResponseModel[],
    gotHit = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#responses = responses;
    this.#gotHit = gotHit;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get responses() {
    return this.#responses;
  }

  get gotHit() {
    return this.#gotHit;
  }

  get answered() {
    for (let response of this.#responses) {
      if (response.revealed) return true;
    }
    return false;
  }
}
