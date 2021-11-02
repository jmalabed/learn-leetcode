/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let lettersUsed = [];
  const charArr = s.split("");
  let strings = {};
  let string = "";
  let max = 0;
  let i = 0;

  for (let j = 0; j < charArr.length; j++) {
    i = j;
    while (lettersUsed.indexOf(charArr[i]) === -1 && charArr[i] != undefined) {
      lettersUsed.push(charArr[i]);
      console.log(lettersUsed, "lettersused");
      i++;
    }
    const sequence = lettersUsed.join("");
    if (lettersUsed.length > max) {
      strings[lettersUsed] = lettersUsed.length;
      string = sequence;
      max = sequence.length;
    }
    lettersUsed = [];
  }
  return max;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbabbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("aab"));
// console.log(lengthOfLongestSubstring("dvdf"));

const jaredSolution = (s) => {
  const isRepeating = (arr1) => {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1.indexOf(arr1[i]) != arr1.lastIndexOf(arr1[i])) {
        return true;
      }
    }
    return false;
  };

  let charArr = s.split("");
  let startingPosition = 0;
  let window = [charArr[0]];
  let endOfWindow = startingPosition + window.length;
  //end condition is when the end of the window is located at the end of the charArr
  while (endOfWindow < charArr.length) {
    if (isRepeating(window)) {
      // repeating, delete element at first position and add element to end
      window.splice(0, 1);
      startingPosition++;
      console.log(window, "check1");
      window.push(charArr[startingPosition + window.length]);
      console.log(window, "check2");
      console.log("ifTrue", window);
    } else {
      // not repeating, increase window length and run check again.
      window.push(charArr[startingPosition + window.length]);
      console.log(window, "else");
      if (isRepeating(window)) {
        window.pop();
        startingPosition++;
        // console.log("slice", window);
        window.splice(0, 1);
        // console.log("slice", window);
      }
    }
    endOfWindow = startingPosition + window.length;
  }
  return window.length;
};

console.log(jaredSolution("pwwkew"));
