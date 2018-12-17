function miniMaxSum(arr) {
  let total = 0;
  let minNumber = Number.MAX_VALUE;
  let maxNumber = Number.MIN_VALUE;

  arr.forEach((number) => {
    total += number;
    number > maxNumber ? maxNumber = number : null;
    number < minNumber ? minNumber = number : null;
  });

  return console.log(`${total - maxNumber} ${total - minNumber}`);
}