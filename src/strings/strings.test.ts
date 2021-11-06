import { getFormattedCurrency } from "./getFormattedCurrency";
import { getFirstName, getLastName } from "./names";

test("Get first Name", () => {
  expect(getFirstName("John Smith")).toBe("John");
});

test("Get last Name", () => {
  expect(getLastName("John Smith")).toBe("Smith");
});

test("Get formatted number with currency - EUR", () => {
  expect(getFormattedCurrency("it-IT", "EUR", 3)).toBe("3,00 €");
});

test("Get formatted number with currency - DOL", () => {
  expect(getFormattedCurrency("en-US", "USD", 3)).toBe("$3.00");
});
