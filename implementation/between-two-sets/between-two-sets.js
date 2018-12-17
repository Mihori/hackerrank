function getTotalX(a, b) {
  let counter = 0;
  let highestOfA = Number.MIN_VALUE;
  let lowestOfB = Number.MAX_VALUE;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > highestOfA) {
      highestOfA = a[i];
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (b[j] < lowestOfB) {
      lowestOfB = b[j];
    }
  }

  for (let i = highestOfA; i <= lowestOfB; i++) {
    let aIsGood = true;
    let bIsGood = true;

    a.forEach((number) => {
      if (i % number !== 0) {
        aIsGood = false;
      }
    });

    b.forEach((number) => {
      if (number % i !== 0) {
        bIsGood = false;
      }
    });

    if (aIsGood && bIsGood) {
      counter++;
    }
  }

  return counter;
}