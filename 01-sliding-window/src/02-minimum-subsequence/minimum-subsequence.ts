/*
Statement
	Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.

	A substring is defined as a contiguous sequence of characters within a string. A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.

	Let’s say you have the following two strings:

	str1 = "abbcb"
	str2 = "ac"

	Since this substring is the shortest among all the substrings in which str2 is present as a subsequence, the function should return this substring, that is, “abbc”

Solution summary
	Initialize two indexes, indexS1 and indexS2, to zero for iterating both strings.

	If the character pointed by indexS1 in str1 is the same as the character pointed by indexS2 in str2, increment both pointers. Otherwise, only increment indexS1.

	Once indexS2 reaches the end of str2, initialize two new indexes (start and end). With these two indexes, we’ll slide the window backward.

	Set start and end to indexS1.

	If the characters pointed to by indexS2 and start are the same, decrement both of them. Otherwise, only decrement start.

	Once, str2 has been discovered in str1 in the backward direction, calculate the length of the substring.

	If this length is less than the current minimum length, update the minSubLen variable and the minSubsequence string.

	Resume the search in the forward direction from start+1 in str1.

	Repeat until indexS1 reaches the end of str1.
  */

export const minWindow = (str1: string, str2: string): string => {
  let minSubLen = str1.length + 1;

  let indexS1 = 0;
  let indexS2 = 0;

  let start = 0;
  let end = 0;

  let minSubsequence = '';

  while (indexS1 < str1.length) {
    for (indexS1 = start; indexS1 < str1.length; indexS1++) {
      if (str1[indexS1] === str2[indexS2]) {
        indexS2++;
      }

      if (indexS2 === str2.length) {
        start = indexS1;
        end = indexS1;

        indexS2--;

        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }

          start--;
        }

        start++;

        if (minSubLen > end - start + 1) {
          minSubLen = end - start + 1;
          minSubsequence = str1.substring(start, end + 1);
        }

        // Resume search from start + 1
        indexS1 = start;
        indexS2 = 0;
      }
    }

    // Move indexS1 forward if no match was found to avoid infinite loop
    indexS1++;
    indexS2 = 0;
  }
  return minSubsequence;
};
