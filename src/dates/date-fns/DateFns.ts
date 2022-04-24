import { add, addMonths, addWeeks, addYears, format } from 'date-fns'
import addDays from 'date-fns/addDays'

export enum FormatDate {
    YYYY_MM_DD = 'yyyy.MM.dd',
    YYYY_DD_MM = 'yyyy.dd.MM',
    DD_MM_YYYY = 'dd.MM.yyyy',
    MM_DD_YYYY = 'MM.dd.yyyy',
}

export enum DWMY {
    DAYS = 'DAYS',
    WEEKS = 'WEEKS',
    MONTHS = 'MONTHS',
    YEARS = 'YEARS',
}

const date = new Date()
export const today = format(date, FormatDate.MM_DD_YYYY)
export const addDay = addDays(date, 1)
export const tomorrow = format(addDay, FormatDate.MM_DD_YYYY)

export function addDaysWeeksYears(date: Date, dwmy: DWMY, amount: number): Date | string {
    let input
    switch (dwmy) {
        case DWMY.DAYS:
            input = addDays(date, amount)
            break
        case DWMY.WEEKS:
            input = addWeeks(date, amount)
            break
        case DWMY.MONTHS:
            input = addMonths(date, amount)
            break
        case DWMY.YEARS:
            input = addYears(date, amount)
            break
    }

    let output = format(input, FormatDate.DD_MM_YYYY)

    return output
}

console.log(addDaysWeeksYears(date, DWMY.MONTHS, 2))
