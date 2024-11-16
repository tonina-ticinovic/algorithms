import { findSumOfThree } from './sum-of-three'

describe('findSumOfThree', () => {
  it.each([
    [[1, -1, 0], -1, false],
    [[3, 7, 1, 2, 8, 4, 5], 10, true],
    [[3, 7, 1, 2, 8, 4, 5], 21, false],
    [[-1, 2, 1, -4, 5, -3], -8, true],
    [[-1, 2, 1, -4, 5, -3], 0, true],
  ])('returns %s for %j and target %i', (nums, target, expected) => {
    expect(findSumOfThree(nums, target)).toBe(expected)
  })
})
