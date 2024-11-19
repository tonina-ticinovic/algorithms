import { reverseWords } from './reverseWords';

describe('reverseWords', () => {
  it.each([
    ['We love Go ', 'Go love We'],
    ['1234 abc XYZ', 'XYZ abc 1234'],
    ['You are amazing', 'amazing are You'],
    ['Hello     World', 'World Hello'],
    ['Greeting123', 'Greeting123'],
  ])('reverses words in the sentence', (input, expected) => {
    const result = reverseWords(input);
    expect(result).toBe(expected);
  });
});
