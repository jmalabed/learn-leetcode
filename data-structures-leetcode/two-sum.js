var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let usedNums = {};
  let ansObj = [];
  for (let k = 0; k < nums.length; k++) {
    usedNums[nums[k]] = k;
  }
  let sum = Number.NEGATIVE_INFINITY;
  while (i < j && sum != target) {
    let sum = nums[i] + nums[j];
    if (sum === target) {
      console.log(i, nums[i], j, nums[j]);
      ansObj = [usedNums[nums[i]], usedNums[nums[j]]];
      return ansObj;
    } else if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    }
  }
};
const arr = [3, 3];
const target = 6;
console.log(twoSum(arr, target));
