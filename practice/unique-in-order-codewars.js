var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an arra
  // if str, convert to array.
  if (typeof iterable === "string") {
    console.log("String");
    iterable = iterable.split("");
  }

  // if array
  for (var i = 0; i < iterable.length - 1; i++) {
    if (iterable[i] === iterable[i + 1]) {
      iterable.splice(i, 1);
      i--;
    }
  }
  console.log(iterable);
};
let testArr = [1, 2, 2, 34, 5, 3, 2, 44, 3, 3, 5];
let testStr = "testinggggg!";
uniqueInOrder(testStr);
