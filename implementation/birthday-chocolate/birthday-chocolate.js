function birthday(s, d, m) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = s[i];
    let length = 1;

    for (let j = i + 1; j <= s.length; j++) {
      if (sum === d && length === m) {
        counter++;
      }
      sum += s[j];
      length++;
    }
    
  }
  return counter;
}