/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * N 字形变换
 * 
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  let down = false;
  let len = s.length
  let lr = 0
  let result = new Array(numRows).fill('')
  for (let i = 0; i < len; i++) { 
    result[lr] = result[lr] + s[i]
    if (lr === 0 || lr === numRows - 1) {
      down = !down
    }
    lr += down ? 1 : -1
  }
  return result.join('')
};

// @lc code=end

