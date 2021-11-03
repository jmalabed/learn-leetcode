const findNb = (m) => {
  // your code
  // n^3 + (n-1)^3...+1^3 = m
  let vol = 0;
  let n = 1;
  while (vol < m) {
    vol += n ** 3;
    if (vol === m) {
      return n;
    }
    n++;
  }
  return -1;
};

// ORRRRRRRR

const findNb1 = (m) => {
  let n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
};
console.log(findNb1(36));
