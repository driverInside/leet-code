import climbingStairs from "./climbingStairs";

describe('Tests', () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8],
    [6, 13],
  ])('should return the distinc ways of climbing to the top', (n, expected) => {
    expect(climbingStairs(n)).toBe(expected);
  });
});
