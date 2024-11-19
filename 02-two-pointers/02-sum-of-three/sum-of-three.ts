/*
Statement

	Given an array of integers, nums, and an integer value, target, determine if there are any three integers in nums whose sum is equal to the target, that is, nums[i] + nums[j] + nums[k] == target. Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

	Note: A valid triplet consists of elements with distinct indexes. This means, for the triplet nums[i], nums[j], and nums[k], i ≠ j, i ≠ k, j ≠ k

Examples

	target 1
	nums [-1, 2, 1, 4, -2]
	result true
	----------------------
	target 1
	nums [-1, 2, 1, 4]
	result false
	----------------------
	target 20
	nums [3, 7, 1, 2, 8, 4, 5]
	result true
*/
export const findSumOfThree = (nums: number[], target: number): boolean => {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
};
