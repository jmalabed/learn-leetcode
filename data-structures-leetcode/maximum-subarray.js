var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  let globalMax = Number.MIN_SAFE_INTEGER;
  let localMax = 0;
  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
};
