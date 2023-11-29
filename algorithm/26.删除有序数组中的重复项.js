/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2,_]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  let fast = 1;
  let slow = 1;
  while (fast < len) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    } else {
      fast++;
    }
  }
  return slow;
};
// @lc code=end

