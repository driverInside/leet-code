/*
From https://leetcode.com/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-interview-150

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


*/

/**
 * climbingStairs
 * @param n the stair steps to reach the top.
 * @returns the distinct ways to climb to the top.
 */
export default function climbingStairs(n: number): number {
  const memo = Array(n + 1).fill(0);
  // Base cases
  memo[0] = 1;
  memo[1] = 1;

  // Using tabulation (Bottom - Up)
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}