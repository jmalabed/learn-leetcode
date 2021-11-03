/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  nums1.splice(m, n);
  console.log(nums1);
  // compare nums 1 and nums 2; if nums 2 is less, insert before. if nums 2 equals,
  // insert before nums 1, if nums 2 greater, move over nums 1 and check again.
  while (i <= nums1.length && j < n) {
    if (i === nums1.length) {
      nums1.splice(nums1.length, 0, nums2[j]);
      j++;
    } else if (nums1[i] >= nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    }
    i++;
  }
  console.log(nums1);
};
const nums1 = [1, 1, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
console.log(merge(nums1, m, nums2, n));
