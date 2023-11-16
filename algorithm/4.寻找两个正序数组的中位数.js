/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 这个题目是hard难度，单纯数组合并去求中位数的时间复杂度是不符合条件的
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let ans
  const sum = [...nums1, ...nums2].sort((a, b) => {
    return a - b
  })
  if (sum.length % 2 === 0) {
    let a = sum.length / 2
    let b = a - 1
    ans = (sum[a] + sum[b]) / 2 
  } else {
    let a = parseInt(sum.length / 2)
    ans = sum[a]
  }
  return ans
};
// @lc code=end

