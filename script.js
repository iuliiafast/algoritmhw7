function buildLetterFrequency(text) {
  text = text.toLowerCase();

  let frequency = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let letter of alphabet) {
    frequency[letter] = 0;
  }

  for (let char of text) {
    if (frequency.hasOwnProperty(char)) {
      frequency[char]++;
    }
  }

  return frequency;
}

const text = `
In a world where language is as diverse as its people, understanding how words are constructed and letters are used can open up new insights into communication and culture. Each letter plays its part in creating the tapestry of human expression.
`;

const letterFrequency = buildLetterFrequency(text);

for (const [letter, freq] of Object.entries(letterFrequency)) {
  console.log(`'${letter}': ${freq}`);
}
