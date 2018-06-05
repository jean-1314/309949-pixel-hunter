const countScore = (answers, lives, score = 0) => {
  for (let index in answers) {
    if (answers.hasOwnProperty(index)) {
      let value = answers[index];

      if (value.answer === `correct`) {
        score = score + 100;
      }

      if (value.time < 10) {
        score = score + 50;
      }

      if (value.time > 20) {
        score = score - 50;
      }
    }
  }

  score = score + (lives * 50);
  if (answers.length < 10) {
    score = -1;
  }
  return score;
};

export default countScore;
