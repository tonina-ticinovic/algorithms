import { findDuplicate } from './findDuplicate'

describe('findDuplicate', () => {
  it.each([
    { nums: [3, 4, 4, 4, 2], expected: 4 },
    { nums: [1, 1], expected: 1 },
    { nums: [1, 3, 4, 2, 2], expected: 2 },
    { nums: [1, 3, 6, 2, 7, 3, 5, 4], expected: 3 },
    { nums: [1, 2, 2], expected: 2 },
  ])('finds the duplicate number correctly for $input', ({ nums, expected }) => {
    const result = findDuplicate(nums)
    expect(result).toBe(expected)
  })
})
