function countingValleys(n, s) {
  let numOfValleys = 0;
  let numOfDs = 0;
  let numOfUs = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'D') {
      numOfDs++;
    }
    if (s[i] === 'U') {
      numOfUs++;
    }
    if (numOfUs - numOfDs === - 1 && s[i + 1] === 'U') {
      numOfValleys++;
    }
  }

  return numOfValleys;    
}