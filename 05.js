function daysToXmas(date) {
    const xMasDay = new Date('Dec 25, 2021')
    var difference = xMasDay - date;
    let days = difference / (1000 * 3600 * 24)

    return Math.ceil(days)
}

console.log(daysToXmas(new Date('Dec 23, 2021 23:59:59')), daysToXmas(new Date('Dec 5, 2021')))