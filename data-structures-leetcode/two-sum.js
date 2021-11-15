const twoSum = (nums, target) => {
  let numHash = {};
  for (num of nums) {
    numHash[num] = numHaΩsh[num] + 1 || 1;
  }
  for (num of nums) {
    numHash[num]--;
    if (numHash[target - num] > 0)
      return [nums.indexOf(num), nums.lastIndexOf(target - num)];
  }
};
