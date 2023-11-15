/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入 s = "abcabcbb"
 * 输出: 3 
 * 滑动窗口思想
 */
var lengthOfLongestSubstring = function (s) {
  let longest = new Set()
  let kr = -1
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      longest.delete(s.charAt(i -1))
    }
    while (kr + 1 < s.length && !longest.has(s.charAt(kr + 1))) {
      longest.add(s.charAt(kr + 1))
      kr ++
    }
    ans = Math.max(ans, kr - i+1)
  }
  return ans
};

// @lc code=end

