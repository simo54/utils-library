import { regexBuilder } from '../regex/regexBuilder'

test('Regex test', () => {
    const regex = regexBuilder('test')
    expect('test').toMatch(new RegExp(regex))
})
