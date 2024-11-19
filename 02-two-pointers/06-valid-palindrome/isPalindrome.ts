/*
Statement

	Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.
*/
export const isPalindrome = (str: string): boolean => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};
