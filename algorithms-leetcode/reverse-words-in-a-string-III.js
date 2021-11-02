var reverseWords = function (s) {
  const wordArr = s.split(" ");
  const swap = (start, end, word) => {
    const arr1 = word.split("");
    while (start < end) {
      const temp = arr1[start];
      arr1[start] = arr1[end];
      arr1[end] = temp;
      start++;
      end--;
    }
    return arr1.join("");
  };

  wordArr
    .map((word) => {
      return swap(0, word.length - 1, word);
    })
    .join(" ");
};

reverseWords("test string!");
