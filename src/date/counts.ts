import eachWeekendOfYear from 'date-fns/eachWeekendOfYear'

export function countWeekendsOfYear(year: string | number) {
  let yearInput = year
  if (typeof yearInput === 'string') {
    yearInput = parseInt(yearInput)
  }

  const result = eachWeekendOfYear(new Date(yearInput))

  return result.length
}

console.log(countWeekendsOfYear(2020))
