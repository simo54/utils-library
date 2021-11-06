import { getFirstName } from "./getFirstName";

test("Get first Name", () => {
  expect(getFirstName("John Smith")).toBe("John");
});
