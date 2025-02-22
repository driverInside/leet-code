import removeElement from "./removeElement";

describe('Tests', () => {
  it('should sum two nums', () => {
    expect(removeElement).toBeDefined();
  });

  it.each([
    [[3, 2, 2, 3], 3, 2],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5],
  ])('should remove the ocurrences', (nums,  val, expected) => {
    expect(removeElement(nums, val)).toBe(expected);
  });
});
