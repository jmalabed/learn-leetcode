/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let square = 0,
    curl = 0,
    paren = 0,
    i = 0,
    lastOpen = null;
  for (let char of s) {
    switch (char) {
      case "{":
        curl++;
        break;
      case "(":
        paren++;
        break;
      case "[":
        square++;
        break;
      case "}":
        curl--;
        break;
      case ")":
        paren--;
        break;
      case "]":
        square--;
        break;
    }
    if (square < 0 || curl < 0 || paren < 0) return false;
    if (lastOpen === "[" && char !== "]") return false;

    lastOpen = char;
  }

  // look for all open, then look for closing parens
  if (square > 0 || curl > 0 || paren > 0) return false;
};
isValid("{[]}");
