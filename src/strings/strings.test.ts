import { getFirstName, getLastName } from "./Names";

test("Get first Name", () => {
  expect(getFirstName("John Smith")).toBe("John");
});

test("Get last Name", () => {
  expect(getLastName("John Smith")).toBe("Smith");
});
