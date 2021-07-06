/* 
[HARD]
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000

Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000

Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000

 

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106 */

var findMedianSortedArrays = function (nums1, nums2) {
        let merged = [...nums1, ...nums2];
        let sortedMerged = merged.sort((a, b) => a - b);
  
        if (nums1.length === 0) {
          if (nums2.length % 2 === 0) {
            let index = nums2.length / 2;
            return (nums2[index] + nums2[index - 1]) / 2;
          } else if (nums2.length % 2 !== 0) {
            if (nums2[Math.round((nums2.length - 1) / 2)] < 0) {
              return nums2[Math.round((nums2.length - 1) / 2)];
            } else {
              return nums2[Math.round((nums2.length - 1) / 2)];
            }
          }
        } else if (nums2.length === 0) {
          if (nums1.length % 2 === 0) {
            let index = nums1.length / 2;
            return (nums1[index] + nums1[index - 1]) / 2;
          } else if (nums1.length % 2 !== 0) {
            if (nums1[Math.round((nums1.length - 1) / 2)] < 0) {
              return nums1[Math.round((nums1.length - 1) / 2) - 1];
            } else {
              return nums1[Math.round((nums1.length - 1) / 2)];
            }
          }
        } else if (sortedMerged.length % 2 === 0) {
          let index = sortedMerged.length / 2;
          return (sortedMerged[index] + sortedMerged[index - 1]) / 2;
        } else if (sortedMerged.length % 2 !== 0) {
          return sortedMerged[Math.round((sortedMerged.length - 1) / 2)];
        }
      };

