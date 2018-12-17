function birthdayCakeCandles(arr) {
  let type = 0;
  let count = 0;

  arr.forEach((number) => {
    type === number ? count++ :
      number > type ? (type = number, count = 1) : null;
  });

  return count;
}