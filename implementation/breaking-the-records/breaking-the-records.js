function breakingRecords(scores) {
  let minScore = scores[0];
  let maxScore = scores[0];
  let counterMin = 0;
  let counterMax = 0;

  scores.forEach((score) => {
    score > maxScore ? (maxScore = score, counterMax++) : null;
    score < minScore ? (minScore = score, counterMin++) : null;
  });

  return [counterMax, counterMin];
}
