var checkInclusion = function (s1, s2) {
  //check if s1 is larger than s2
  if (s1.length > s2.length) return false;
  //check equals function
  const equalObj = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; //if keys.length do not match, not equal
    for (const [key, value] of Object.entries(obj1)) {
      if (obj2[key] !== value) return false; // if the same obj keyvalue =/= obj1 keyvalue, not equal. check all keys/vals of obj1
    }
    return true; // if previous checks are not right, return true
  };

  const s1Letters = {},
    s2Letters = {};
  //     Counts s1 letters and initial window
  for (let i = 0; i < s1.length; i++) {
    s1Letters[s1[i]] = s1Letters[s1[i]] + 1 || 1;
    s2Letters[s2[i]] = s2Letters[s2[i]] + 1 || 1;
  }
  //check if strings are equal
  if (equalObj(s1Letters, s2Letters)) return true;
  //     remainder of s2
  for (let i = s1.length, start = 0; i < s2.length; i++, start++) {
    s2Letters[s2[start]]--;
    if (s2Letters[s2[start]] === 0) delete s2Letters[s2[start]];
    s2Letters[s2[i]] = s2Letters[s2[i]] + 1 || 1;
    if (equalObj(s1Letters, s2Letters)) return true;
  }
  return false;
};
// look in s2 for the first char in s1Bank. if the character is there,

// look left and look right for other characters in the s1Bank regardless of order.
// look left
// look right

// if character matches, continue looking in that direction. remove letters from s1Bank as they are found.
// if character does not match, stop looking in that direction

console.log(checkInclusion("tersdwat", "terstwddadd"));
