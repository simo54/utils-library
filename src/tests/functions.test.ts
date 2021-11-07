import { getExecutionTime } from '../functions/getExecutionTime'

test('Get weeks day count', () => {
  expect(
    getExecutionTime(function () {
      console.log('ciao')
    })
  )
})
