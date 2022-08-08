import questions from "../questionsBank";

export default function handler(req, res) {
  const idSelect = +req.query.id;

  const onlyQuestion = questions.filter((question) => question.id === idSelect);

  if (onlyQuestion.length === 1) {
    const questionsSelect = onlyQuestion[0].shuffleResponses()
    res.status(200).json(questionsSelect.convertToObject());
  } else {
    res.status(204).send()
  }
}
