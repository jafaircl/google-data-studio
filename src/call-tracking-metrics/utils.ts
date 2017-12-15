export function formatDate(str: string) {
    const year = str.substring(0,4)
    const month = str.substring(5, 7)
    const day = str.substring(8,10)
    return [year, month, day].join('')
}

export function monthNameToNumber(str: string): number {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ].indexOf(str) + 1
}
