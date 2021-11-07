export function getFormattedCurrency(
  country: string,
  currency: string,
  inputNumber: number
): string {
  return Intl.NumberFormat(country, {
    style: "currency",
    currency: currency,
  }).format(inputNumber);
}
