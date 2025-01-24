/**
 * https://leetcode.com/problems/palindrome-number/description/
 * 
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

/**
 * palindromeNumber
 * @param num An integer
 * @returns true if is a palindrome and false otherwise.
 */
export default function palindromeNumber(num: number): boolean {
  if (num < 0) {
    return false;
  }

  let original = num;
  let inverted = 0;

  while (num > 0) {
    const digit = num % 10;
    inverted = (inverted * 10) + digit;
    num = Math.floor(num / 10);
  }
  
  return original === inverted;
}