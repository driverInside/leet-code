/*
 Taken from https://leetcode.com/problems/two-sum/description/
 Given an array of integers nums and an integer target,
 return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution,
 and you may not use the same element twice.
 You can return the answer in any order.
*/

/**
 * twoSum
 * @param nums Array of numbers
 * @param target the sum target
 * @returns The indices of two numbers such that they add up to target
 */
export default function twoSum(nums: number[], target: number): number[] | undefined {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const diff = target - element;

    const indexTarget = numMap.get(`${diff}`);

    if (indexTarget !== undefined) {
      return [indexTarget, i];
    } 

    numMap.set(`${element}`, i);
  }
}
