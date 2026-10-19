export function getLongest(words: string[]): string {
  return words.reduce((current, word) => (word.length > current.length ? word : current), '')
}
