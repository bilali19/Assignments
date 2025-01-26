function reorderSentences(sentence: string): string {
    const words = sentence.split(' '); // Split the sentence into words
    const indices = [words.findIndex(word => /^[A-Z]/.test(word))]; // Find the index of the capitalized word
    indices.push(...words.map((_, i) => i).filter(i => i !== indices[0])); // Add the rest of the indices
    const reorderedWords = indices.map((index) => words[index]); // Reorder the words based on indices
    return reorderedWords.join(' '); // Join the words back into a sentence
}

// Examples
console.log(reorderSentences("ming Yao")); // Output: "Yao ming"
console.log(reorderSentences("Mano donowana")); // Output: "Mano donowana"
console.log(reorderSentences("wario LoBan hello")); // Output: "LoBan wario hello"
console.log(reorderSentences("bull color pig Patrick")); // Output: "Patrick bull color pig"