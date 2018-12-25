function getMoneySpent(keyboards, drives, b) {
  let highestAmountToSpend = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] > highestAmountToSpend && keyboards[i] + drives[j] <= b) {
        highestAmountToSpend = keyboards[i] + drives[j]; 
      }
    }
  }

  return highestAmountToSpend;
}
