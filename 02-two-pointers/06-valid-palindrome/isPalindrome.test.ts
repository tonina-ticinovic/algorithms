import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it.each([
    ['madam', true],
    ['deed', true],
    ['abcba', true],
    ['tebbem', false],
    ['eeccccbebaeeabebccceea', false],
  ])('determines if a string is a palindrome', (input, expected) => {
    const result = isPalindrome(input);
    expect(result).toBe(expected);
  });
});
