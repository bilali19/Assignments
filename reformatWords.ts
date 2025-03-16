function reformatWords(words: string[]): string {
  // Filter out empty strings
  const filteredWords = words.filter(word => word !== "");

  // If there are no valid words, return a space
  switch (filteredWords.length) {
    case 0:
      return " ";

  // Handle if only one word in the array
    case 1;
      return filteredWords[0];

  // Handle if there are only two words in the array
    case 2:
      return `${filteredWords[0]} and ${filteredWords[1]}`
    default:
      return `${filteredWords.slice(0, -1).join(", ")} and ${filteredWords[filteredWords.at(-1)}`;
  }
}

console.log(reformatWords(['ninja', 'samurai', 'ronin']));
console.log(reformatWords(['ninja', '', 'ronin']);
console.log(reformatWords([]));
