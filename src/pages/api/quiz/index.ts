import { shuffle } from "../../../functions/arrays";
import questions from "../questionsBank";

export default function quiz(req, res) {
  const ids = questions.map((question) => question.id);
  res.status(200).json(shuffle(ids));
}
