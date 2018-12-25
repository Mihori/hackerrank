function pageCount(n, p) {
  const front = p - 1;
  const back = n % 2 === 0 ? n - p : (n - p - 1) ;

  return front > back ? Math.ceil(back / 2) : Math.ceil(front / 2);
}
