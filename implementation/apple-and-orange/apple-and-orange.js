function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesHitTheHouse = 0;
  let orangesHitTheHouse = 0;

  apples.forEach((apple) => {
    a + apple < s || a + apple > t ? null : applesHitTheHouse++;
  });

  oranges.forEach((orange) => {
    b + orange > t || b + orange < s ? null : orangesHitTheHouse++;
  });

  return console.log(applesHitTheHouse + '\n' + orangesHitTheHouse);
}