function pickingNumbers(a) {
  let result = 0;
  let table = {};

  for (let i = 0; i < a.length; i++) {
    let current = a[i] < 0 ? 0 - a[i] : a[i];
      if (!table[current]) {
          table[current] = 1;
      } else {
          table[current] += 1;
      }
  }

  for (let n in table) {
      let temp = table[n];
      let temp2 = table[n];
      for (let n2 in table) {
          if (n2 - n === 1) { 
            temp += table[n2];
          }
          if (n2 - n === -1) { 
            temp2 += table[n2];
        }
      }
      if (temp < temp2) { 
        temp = temp2;
    }
      if (temp > result) { 
          result = temp;
      }
  }
  return result;
}

const array = [4, 6, 5, 3, 3, 1]

console.log(pickingNumbers(array));