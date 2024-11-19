/*
Statement

	Given a sentence, reverse the order of its words without affecting the order of letters within the given word.
*/
export const reverseWords = (sentence: string): string => {
  const words = sentence.split(' ');
  const reversedWords = words.filter((word) => word !== '').reverse();
  console.log(reversedWords);

  return reversedWords.join(' ');

  return '';
};
