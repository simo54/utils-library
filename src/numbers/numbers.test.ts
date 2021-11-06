import { getNumbersFromString } from "./getNumbersFromString";

test("Get int number from string", () => {
  expect(getNumbersFromString("38738qudwqjdn%@%^$@^%@39743289")).toBe(
    3873839743289
  );
});
