import palindromeNumber from "./palindromeNumber";

describe('Palindrome number', () => {
  it('should be defined', () => {
    expect(palindromeNumber).toBeDefined();
  });

  it.each([
    [121, true],
    [-121, false],
    [10, false],
    [-3, false],
    [4, true],
    [22, true],
  ])('should evaluate if a number is palindrome', (num, expected) => {
    expect(palindromeNumber(num)).toBe(expected);
  });
});