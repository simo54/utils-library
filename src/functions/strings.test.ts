import { getFormattedCurrency } from './getFormattedCurrency'
import { hashInput } from './hashInput'
import { getFirstName, getInitialFirstAndLastName, getLastName } from './names'
import { countWords } from './countWords'

test('Get first Name', () => {
    expect(getFirstName('John Smith')).toBe('John')
})

test('Get last Name', () => {
    expect(getLastName('John Smith')).toBe('Smith')
})

test('Get formatted number with currency - EUR', () => {
    expect(getFormattedCurrency('it-IT', 'EUR', 3)).toBe('3,00 €')
})

test('Get formatted number with currency - DOL', () => {
    expect(getFormattedCurrency('en-US', 'USD', 3)).toBe('$3.00')
})

test('Get word hashed', () => {
    expect(hashInput('ciaone')).toBe(1360711733)
})

test('Count words', () => {
    expect(countWords('hi my name is')).toBe(4)
})

test('Get Initials', () => {
    expect(getInitialFirstAndLastName('John Smith')).toBe('JS')
})
