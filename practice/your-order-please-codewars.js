function order(words) {
  // ... words have a number in them. the number will be their order in the response 1 index
  // response in string
  let wordObj = {};
  let wordArr = words.split(" ");
  let wordReOrder = [];

  wordArr.map((word) => {
    word.split("").map((char) => {
      if (parseInt(char) > 0) wordObj[word] = parseInt(char);
    });
  });

  for (key in wordObj) {
    console.log(key, wordObj[key]);
    wordReOrder[wordObj[key] - 1] = key.toString();
  }
  return wordReOrder.join(" ");
}
let words = "1this 2is t4he tes3t strin5g";
console.log(order(words));
