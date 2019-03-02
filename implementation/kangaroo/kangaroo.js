function kangaroo(x1, v1, x2, v2) {
  if ((x1 < x2 && v1 < v2) || (x1 > x2 && v1 > v2)) {
      return 'NO';
  }
  let smallerX = x1 > x2 ? x2 : x1;
  let biggerX = x1 > x2 ? x1 : x2;
  let smallerV = v1 > v2 ? v2 : v1;
  let biggerV = v1 > v2 ? v1 : v2;
  let x = biggerX - smallerX;
  let v = biggerV - smallerV;
  
  if (x % v === 0) {
      return 'YES';
  }

  return 'NO';
}