function migratoryBirds(arr) {
  let mostFrequentBird = Number.MIN_VALUE;
  let mainCounter = Number.MIN_VALUE;
  let checkedBirds = [];

  for (let i = 0; i < arr.length; i++) {
    let temporaryCounter = 0;

    if (checkedBirds.indexOf(arr[i]) === -1) {
      checkedBirds.push(arr[i]);

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temporaryCounter++
      }
    }

    if (temporaryCounter > mainCounter) {
      mostFrequentBird = arr[i];
      mainCounter = temporaryCounter;
    }
    if (temporaryCounter === mainCounter && arr[i] < mostFrequentBird) {
      mostFrequentBird = arr[i];
      mainCounter = temporaryCounter;
    }

    }
  }

  return mostFrequentBird;
}