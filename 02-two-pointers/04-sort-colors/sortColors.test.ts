import { sortColors } from './sortColors'

describe('sortColors', () => {
  it.each([
    [[0, 1, 0], [0, 0, 1]],
    [[1], [1]],
    [[2, 2], [2, 2]],
    [[1, 1, 0, 2], [0, 1, 1, 2]],
    [[2, 1, 1, 0], [0, 1, 1, 2]],
  ])('sort colors correctly', (input, expected) => {
    const result = sortColors([...input])
    expect(result).toEqual(expected)
  })
})
