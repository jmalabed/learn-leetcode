function digital_root(n) {
  // ...
  if (n.toString().length === 1) {
    return n;
  } else {
    let splitArr = n.toString().split("").map(Number);
    let sum = splitArr.reduce((prev, current) => prev + current);
    return digital_root(sum);
  }
}
