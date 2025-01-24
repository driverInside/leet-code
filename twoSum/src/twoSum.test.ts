import twoSum from "./twoSum";

describe('Two Sum', () => {
  it('should be defined', () => {
    expect(twoSum).toBeDefined();
  });

  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
    [[1, 2, 3, 4, 5, 6, -2, -9], 2, [3, 6]]
  ])('should return the indices of two numbers', (nums, target, expected) => {
    expect(twoSum(nums, target)).toStrictEqual(expected);
  });  
});