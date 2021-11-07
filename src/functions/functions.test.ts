import { getExecutionTime } from './getPerformance'

test('Get weeks day count', () => {
  expect(
    getExecutionTime(function () {
      console.log('ciao')
    })
  )
})
