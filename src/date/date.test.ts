import { countWeekendsOfYear } from './counts'

test('Get weeks day count', () => {
  expect(countWeekendsOfYear(2020)).toBe(104)
})
