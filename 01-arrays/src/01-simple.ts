/**
 * compute the sum of values
 * @param arr - Array of numbers
 * @returns - Sum of all numbers in the array or 0 if the array is empty
 */
export const sumAll = (arr: number[]): number => {
  return arr.reduce((accumulator, current) => accumulator + current, 0);

  // also possible to use forEach
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
};

/**
 * compute the sum of even values
 * @param arr - array of numbers
 * @returns sum of all even numbers in the array or 0 if the array is empty
 */
export const sumEven = (arr: number[]): number => {
  return arr.reduce((accumulator, current) => {
    if (current % 2 == 0) {
      return accumulator + current;
    }
    return accumulator;
  }, 0);

  // also possible
  let sum = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};

/**
 * search for a target value in an array
 * @param arr - array of numbers
 * @param target - Value to search for
 * @returns true if the target value is found, false otherwise
 */
export const sequentialSearch = (arr: number[], target: number): boolean => {
  return Boolean(arr.find((num) => num === target));

  arr.forEach((num) => {
    if (num === target) {
      return true;
    }
  });

  return false;
};

/**
 * search for a target value in a sorted array
 * @param arr - a sorted array of numbers
 * @param target - the value to search for
 * @returns true if the target value is found, false otherwise
 */
export const binarySearch = (arr: number[], target: number): boolean => {
  // arr.sort((a, b) => a - b); // is says that arr is sorted, but this is just to remember that binary search always works with sorted arrays only

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return true;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return false;
};

/**
 * rotate an array k positions to the left
 * @param arr of numbers
 * @param k number of positions to rotate
 * @returns a new array with the values rotated k positions to the left
 *
 * Example:
 * rotateKLeft([1, 2, 3, 4, 5], 2) => [3, 4, 5, 1, 2]
 *
 * rotateKLeft([1, 2, 3, 4, 5], 6) => [2, 3, 4, 5, 1]
 */
export const rotateKLeft = (arr: number[], k: number): number[] => {
  // arr.unshift adds specified items to the beginning of an array
  // arr.shift removes the first element from an array and returns it
  // arr.pop removes the last element from an array and returns it

  // complexity O(n * k)
  // thi is rotate right
  // for (let i = 0; i < k; i++) {
  //   const element = arr.pop();

  //   if (element) {
  //     arr.unshift(element); // we take last element and add it to the beginning of the array
  //   }
  //   console.log(arr);
  // }

  for (let i = 0; i < k; i++) {
    const element = arr.shift();

    if (element) {
      arr.push(element); // we take the first element and add it to the end of the array
    }
    console.log(arr);
  }

  return arr;
};

/**
 * create a wave array - arrange the array elements such that the element at the odd indices are less than or equal to their neighboring elements at the even indices
 * @param arr - array of numbers
 * @returns a new array with the values in a wave pattern
 *
 * Example:
 * waveArray([8, 1, 2, 3, 4, 5, 6, 4, 2]) => [8, 1, 3, 2, 5, 4, 6, 2, 4 ]
 */
export const waveArray = (arr: number[]): number[] => {
  for (let i = 1; i <= arr.length; i += 2) {
    if (arr[i] > arr[i - 1] || (arr[i + 1] && arr[i] > arr[i + 1])) {
      if (arr[i + 1] && arr[i - 1] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      } else {
        [arr[i - 1], arr[i]] = [arr[i], arr[i + -1]];
      }
    }
  }

  return arr;
};

/**
 * find maximum difference between the indices of two elements
 * @param arr - array of numbers
 * @returns - the maximum difference between the indices of two elements in the array such that the larger
 *
 * @description
 * Find the maximum difference between the indices of two elements such that the larger element
 * appears after the smaller element. The difference between j and i is the maximum among all
 * possible pairs of indices in the array. The element at index j is greater than the element at
 * index i i.e., arr[j] > arr[i].
 *
 * Example:
 * findIndexMaxDifference([33, 9, 10, 3, 2, 60, 30, 33, 1]) => 6
 */
export const findIndexMaxDifference = (arr: number[]): number => {
  let maxDiff = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i] && j - i > maxDiff) {
        maxDiff = j - i;
      }
    }
  }

  return maxDiff;
};

/**
 * merge two sorted arrays
 * @param arr1 - first sorted array
 * @param arr2 - second sorted array
 * @returns a new array with the values from arr1 and arr2 merged and sorted
 *
 * Example:
 * mergeArrays([1, 3, 5], [2, 4, 6]) => [1, 2, 3, 4, 5, 6]
 */
export const mergeSorted = (arr1: number[], arr2: number[]): number[] => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

/**
 * find the missing number in an array of positive numbers
 * @param arr - array of positive numbers
 * @returns the missing number in the array or -1 if no number is missing
 *
 * Example:
 * findMissingNumber([1, 2, 3, 5, 6, 7, 8]) => 4
 */
export const findMissingNumber = (arr: number[]): number => {
  // this solution assumes that starting number of the array is correct
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }

  return -1;
};

export type Data = {
  [name: string]: number;
};

/**
 * build an object from the given names and values
 * @param names - array with names of the properties
 * @param values - array with values of the properties
 * @returns an object with the names and values
 *
 * Example:
 * buildObject(['a', 'b', 'c'], [1, 2, 3]) => { a: 1, b: 2, c: 3 }
 */
export const buildData = (names: string[], values: number[]): Data => ({});
