function bonAppetit(bill, k, b) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const AnnaShouldHavePaid = (bill.reduce(reducer) - bill[k]) / 2;

  return AnnaShouldHavePaid === b ? console.log('Bon Appetit') : console.log(b - AnnaShouldHavePaid);
} 