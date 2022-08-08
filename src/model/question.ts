import { shuffle } from "../functions/arrays";
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

  shuffleResponses(): QuestionModel {
    let responsesShuffled = shuffle(this.#responses);
    return new QuestionModel(
      this.#id,
      this.#statement,
      responsesShuffled,
      this.#gotHit
    );
  }

  convertToObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      responses: this.#responses.map((resp) => resp.convertToObject()),
      gotHit: this.#gotHit,
    };
  }
}
