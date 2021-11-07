export function getNumbersFromString(input: string): number {
  const stringOnlyNumber = input.replace(/\D/g, "");
  return parseInt(stringOnlyNumber, 10);
}
