/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let ans = [0 ,1, 2]
  for (let i = 3; i <= n; i++) {
    ans[i] = ans[i - 1] + ans[i -2]
  }
  return ans[n];
};
// @lc code=end

