/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length;
  for (let right = 0; right < len; ) {
    if (nums[right] === val) {
      nums[right] = nums[len - 1];
      len--;
    } else {
      right++;
    }
  }
  nums = nums.slice(0, len);
  return len
};
// @lc code=end

