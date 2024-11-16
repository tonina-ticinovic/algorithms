/*
Statement

	Given an array, colors, which contains a combination of the following three elements:

	0 (representing red)
	1 (representing white)
	2 (representing blue)

	Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. To improve your problem-solving skills, do not utilize the built-in sort function.
*/
export const sortColors = (colors: number[]): number[] => {
  let start = 0
  let current = 0
  let end = colors.length - 1

  while (current <= end) {
    if (colors[current] === 0) {
      [colors[start], colors[current]] = [colors[current], colors[start]]

      current++
      start++
    } else if (colors[current] === 1) {
      current++
    } else if (colors[current] === 2) {
      [colors[current], colors[end]] = [colors[end], colors[current]]

      end--
    }
  }

  return colors
}
