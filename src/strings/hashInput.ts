// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
export function hashInput(input: any): number {
  let hash = 0,
    i,
    chr
  if (input.length === 0) return hash
  for (i = 0; i < input.length; i++) {
    chr = input.charCodeAt(i)
    hash = (hash << 5) - hash
    hash += chr
    hash |= 0 // Convert to 32bit integer
  }
  return Math.abs(hash)
}
