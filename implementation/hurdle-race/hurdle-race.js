function hurdleRace(k, height) {
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    const dose = height[i] - k;
    if (dose > result) {
        result = dose;
    }
  }
  return result;
}