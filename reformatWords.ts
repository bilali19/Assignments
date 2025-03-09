function reformatWords(words: string[]): string {
  // Filter out empty strings
  const filteredWords = words.filter(word => word !== "");

  // If there are no valid words, return a space
  if (filteredWords.length === 0) {
    return " ";
  }

  // Handle if the sentence is only one word
  if (filteredWords.length === 1) {
    return filteredWords[0];
  }

  // All but the last word, joined by a comma and space
  const allButLastWord = filteredWords.slice(0, -1).join(", ");

  // Last word of the sentence
  const lastWord = filteredWords[filteredWords.length - 1];

  return `${allButLastWord} and ${lastWord}`;
}

console.log(reformatWords(['ninja', 'samurai', 'ronin']));
console.log(reformatWords(['ninja', '', 'ronin']);
console.log(reformatWords([]));
