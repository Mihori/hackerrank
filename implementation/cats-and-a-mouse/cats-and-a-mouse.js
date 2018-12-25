function catAndMouse(x, y, z) {
  const distanceCat1 = z - x >= 0 ? z - x : (0 - (z - x));
  const distanceCat2 = z - y >= 0 ? z - y : (0 - (z - y));
  const result = distanceCat1 === distanceCat2
                 ? 'Mouse C'
                 : distanceCat1 > distanceCat2 ? 'Cat B' : 'Cat A';

  return result;
}