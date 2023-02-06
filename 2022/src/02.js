countHours = (year, holidays) => {
    const hours = holidays.filter(holiday => {
        const date = new Date(`${holiday}/${year}`).getDay()
        return date % 6 !== 0
    })
    return hours.length * 2
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays))
