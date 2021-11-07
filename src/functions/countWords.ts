// https://stackoverflow.com/a/27418136/14079233
export function countWords(input: string) {
  const count = input.match(/(\w+)/g)
  return count?.length
}
console.log(countWords('ciao marco sono simo'))
