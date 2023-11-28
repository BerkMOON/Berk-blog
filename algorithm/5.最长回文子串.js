/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s;
  let result = '';
  for(let i=0; i<s.length; i++) {
      let evenLen = getStr(s, i, i + 1);
      let oddLen = getStr(s, i, i);
      if (evenLen.length> result.length || oddLen.length > result.length) {
          result = evenLen.length > oddLen.length ? evenLen: oddLen
      }
  }
  return result;
};

const getStr = (s, i, j) => {
  if(s[i] !== s[j]) return '';
  let left = i;
  let right = j;
  while(left > 0 && right < s.length && s[left - 1] === s[right + 1]) {
      left--;
      right++;
  }
  return s.substring(left, right + 1)
}
// @lc code=end
