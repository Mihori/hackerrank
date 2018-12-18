function sockMerchant(n, ar) {
  let numberOfPairs = 0;
  let colorsChecked = [];

  for (let i = 0; i < n; i++) {
    let counter = 0;
    if (colorsChecked.indexOf(ar[i]) === -1) {
      colorsChecked.push(ar[i]);
      for (let j = 0; j < n; j++) {
        if (ar[i] === ar[j]) {
          counter++;
        }
      }
      if (counter % 2 !== 0) {
        counter -= 1;
      }
      numberOfPairs += counter / 2;
    }
    }
return numberOfPairs;
}