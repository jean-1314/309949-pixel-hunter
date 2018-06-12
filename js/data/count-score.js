const countScore = (answers, lives, score = 0) => {
  answers.forEach((answer) => {
    if (answer.correct) {
      score += 100;
      score += answer.time < 10 ? 50 : 0;
      score -= answer.time > 20 ? 50 : 0;
    }
  });

  score += (lives * 50);
  if (answers.length < 10) {
    score = -1;
  }
  return score;
};

export default countScore;
