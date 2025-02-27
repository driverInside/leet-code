/*
https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

/**
 * 
 * @param nums1 single array sorted in non-decreasing order.
 * @param m the number of elements of the first array.
 * @param nums2 single array sorted in non-decreasing order.
 * @param n the number of elements of the second array.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m + n - 1;
  let mi = m - 1;
  let ni = n - 1;

  while (ni >= 0) {
    if (mi >= 0 && nums1[mi] > nums2[ni]) {
      nums1[i] = nums1[mi];
      mi--;
    } else {
      nums1[i] = nums2[ni];
      ni--;
    }
    i--;
  }
};

const nums1: number[] = [1, 2, 3, 0, 0, 0];
const nums2: number[] = [2, 5, 6];

merge(nums1, 3, nums2, 3);

console.log(nums1);

const nums3: number[] = [1];
const nums4: number[] = [];

merge(nums3, 1, nums4, 0);

console.log(nums3);

const nums5: number[] = [0];
const nums6: number[] = [1];

merge(nums5, 0, nums6, 1);

console.log(nums5);

const nums7: number[] = [2, 0];
const nums8: number[] = [1];

merge(nums7, 1, nums8, 1);

console.log(nums7);
