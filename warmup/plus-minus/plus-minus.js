function plusMinus(arr) {
  const divider = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((number) => {
      if (number !== 0) {
          number > 0 ? positive++ : negative++
      } else {
          zero++
      }
  });

  return console.log(`${(positive / divider).toFixed(6)}`),
         console.log(`${(negative / divider).toFixed(6)}`),
         console.log(`${(zero / divider).toFixed(6)}`);
}